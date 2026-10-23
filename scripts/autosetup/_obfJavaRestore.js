const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");

const batchPath = path.join(__dirname, "_obfBatchVnext.js");
let src = fs.readFileSync(batchPath, "utf8");
src = src.replace(
  "module.exports = { transformKotlin, transformJava, transformTypeScript, runTests };",
  "module.exports = { findJavaMethod, matchBraceEnd, afterSuperCall, classNamesIn, skipTriviaOrString };",
);
src = src.replace(/\r?\nif \(require\.main === module\)[\s\S]*$/, "\n");
const mod = new Module(batchPath);
mod.filename = batchPath;
mod.paths = Module._nodeModulePaths(__dirname);
mod._compile(src, batchPath);
const { findJavaMethod, matchBraceEnd, afterSuperCall, classNamesIn, skipTriviaOrString } = mod.exports;

function isObfMethod(name) {
  return /Obf/i.test(name) || /bfV\d+/.test(name) || /V\d+(?:Hash|Sum|Clamp|Shift|Byte|Mix|Fold)/.test(name);
}

const root = path.resolve(__dirname, "..", "..");
const FRAG = "chihbkpormdcangvacrsz";

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "build" || entry.name === ".git") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function callFor(name, params) {
  const p = params.replace(/\s+/g, " ");
  if (p.includes("String")) return `${name}("k3")`;
  if (p.includes("int[]")) return `${name}(new int[]{3, 8, 11})`;
  if ((p.match(/\bint\b/g) || []).length >= 2) return `${name}(4, 9)`;
  if (p.includes("int")) return `${name}(4)`;
  return null;
}

function batchesIn(source) {
  const groups = new Map();
  const re = /private\s+static\s+int\s+(\w*ObfV(\d+)\w*)\s*\(([^)]*)\)/g;
  let match;
  while ((match = re.exec(source))) {
    const batch = Number(match[2]);
    const call = callFor(match[1], match[3]);
    if (!call) continue;
    if (!groups.has(batch)) groups.set(batch, []);
    groups.get(batch).push(call);
  }
  return groups;
}

let files = 0;
let sinks = 0;
for (const file of walk(path.join(root, "android", "app", "src", "main", "java"))) {
  if (!file.endsWith(".java") || file.includes("rnobfuscator")) continue;
  let source = fs.readFileSync(file, "utf8");
  if (source.includes("autosetup-decoy") || source.includes("dex-lanes")) continue;
  let stripped = false;
  if (source.includes("SinkRestore")) {
    source = source
      .split(/\r?\n/)
      .filter((line) => !line.includes("SinkRestore"))
      .join(source.includes("\r\n") ? "\r\n" : "\n");
    stripped = true;
  }
  const groups = batchesIn(source);
  if (!groups.size) {
    if (stripped) fs.writeFileSync(file, source);
    continue;
  }
  const classes = classNamesIn(source);
  const edits = [];
  let i = 0;
  while (i < source.length) {
    const skipped = skipTriviaOrString(source, i);
    if (skipped > i) {
      i = skipped;
      continue;
    }
    if (source[i] !== "{") {
      i++;
      continue;
    }
    const method = findJavaMethod(source, i);
    if (!method || isObfMethod(method.name)) {
      i++;
      continue;
    }
    const close = matchBraceEnd(source, i);
    const body = source.slice(i, close);
    const missing = [];
    for (const [, calls] of groups) {
      if (!calls.some((call) => call.includes("new int[]"))) continue;
      const present = calls.some((call) => {
        const name = call.slice(0, call.indexOf("("));
        return new RegExp(`\\b${name}\\b`).test(body);
      });
      if (!present) {
        for (const call of calls) if (!missing.includes(call)) missing.push(call);
      }
    }
    if (missing.length) {
      const sink = `@SuppressWarnings("unused") final int ${FRAG}SinkRestore = ${missing.join(" ^ ")};`;
      const at = classes.has(method.name) ? afterSuperCall(source, i) : i + 1;
      edits.push({ at, text: `\n        ${sink}` });
      sinks++;
    }
    i++;
  }
  if (!edits.length) {
    if (stripped) fs.writeFileSync(file, source);
    continue;
  }
  edits.sort((a, b) => b.at - a.at);
  for (const edit of edits) source = source.slice(0, edit.at) + edit.text + source.slice(edit.at);
  fs.writeFileSync(file, source);
  files++;
}
console.log("restored sinks", sinks, "in", files, "files");

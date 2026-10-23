const fs = require("node:fs");
const path = require("node:path");
function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "build" || entry.name === ".git" || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}
function bal(code) {
  let depth = 0;
  let i = 0;
  while (i < code.length) {
    const c = code[i];
    const n = code[i + 1];
    if (c === "/" && n === "/") {
      const nl = code.indexOf("\n", i);
      i = nl < 0 ? code.length : nl + 1;
      continue;
    }
    if (c === "/" && n === "*") {
      const end = code.indexOf("*/", i + 2);
      i = end < 0 ? code.length : end + 2;
      continue;
    }
    if (c === '"' || c === "'") {
      const q = c;
      i++;
      while (i < code.length) {
        if (code[i] === "\\") {
          i += 2;
          continue;
        }
        if (code[i] === q) {
          i++;
          break;
        }
        i++;
      }
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}") depth--;
    i++;
  }
  return depth;
}
const root = path.join("android", "app", "src", "main", "java");
let bad = 0;
for (const file of walk(root)) {
  if (!/\.(java|kt)$/.test(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  if (text.includes("autosetup-decoy") || text.includes("dex-lanes") || file.includes("rnobfuscator")) continue;
  const depth = bal(text);
  if (depth !== 0) {
    bad++;
    console.log(depth, file);
  }
}
console.log("unbalanced", bad);

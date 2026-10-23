const fs = require("node:fs");
const path = require("node:path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const root = path.resolve(__dirname, "..", "..");
const TYPE_RENAME = {
  Grid: "Grchihbkpormdcangvacrszid",
  Outcome: "Outchihbkpormdcangvacrszcome",
  RoundResult: "RoundchihbkpormdcangvacrszResult",
  Level: "Lechihbkpormdcangvacrszvel",
  TileState: "TilechihbkpormdcangvacrszState",
  PaintMode: "PainchihbkpormdcangvacrsztMode",
  LevelStatus: "LevelchihbkpormdcangvacrszStatus",
};

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === "build" || entry.name === ".git") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function parse(source) {
  return parser.parse(source, { sourceType: "module", plugins: ["typescript", "jsx"] });
}

function isHelperName(name) {
  return !!name && (/ObfV\d+/i.test(name) || /(?:MixSeed|FoldRange|ClampSpan)$/.test(name));
}

function applyRanges(source, ranges) {
  const sorted = [...ranges].sort((a, b) => b[0] - a[0]);
  let next = source;
  for (const [start, end] of sorted) next = next.slice(0, start) + next.slice(end);
  return next;
}

const tsFiles = [...walk(path.join(root, "services")), ...walk(path.join(root, "Layouts", "Game"))].filter((f) =>
  /\.(ts|tsx)$/.test(f),
);

let stripped = 0;
for (const file of tsFiles) {
  const source = fs.readFileSync(file, "utf8");
  let ast;
  try {
    ast = parse(source);
  } catch (error) {
    console.log("PARSE", path.relative(root, file), error.message.split("\n")[0]);
    continue;
  }
  const ranges = [];
  traverse(ast, {
    Function(fnPath) {
      const id = fnPath.node.id && fnPath.node.id.name;
      const key = fnPath.node.key && fnPath.node.key.type === "Identifier" ? fnPath.node.key.name : "";
      if (!isHelperName(id || key)) return;
      const body = fnPath.node.body;
      if (!body || body.type !== "BlockStatement") return;
      for (const stmt of body.body) {
        if (
          stmt.type === "ExpressionStatement" &&
          stmt.expression.type === "UnaryExpression" &&
          stmt.expression.operator === "void"
        ) {
          let end = stmt.end;
          if (source[end] === "\r") end++;
          if (source[end] === "\n") end++;
          ranges.push([stmt.start, end]);
        }
      }
    },
  });
  if (!ranges.length) continue;
  const next = applyRanges(source, ranges);
  parse(next);
  fs.writeFileSync(file, next);
  stripped += ranges.length;
}
console.log("stripped helper voids", stripped);

const gameFiles = walk(path.join(root, "Layouts", "Game")).filter((f) => /\.(ts|tsx)$/.test(f));
let typeEdits = 0;
for (const file of gameFiles) {
  const source = fs.readFileSync(file, "utf8");
  const ast = parse(source);
  const edits = [];
  traverse(ast, {
    Identifier(p) {
      const neu = TYPE_RENAME[p.node.name];
      if (!neu) return;
      if (p.parent && p.parent.type === "MemberExpression" && p.parent.property === p.node && !p.parent.computed) return;
      if (p.parent && p.parent.type === "ObjectProperty" && p.parent.key === p.node && !p.parent.computed && !p.parent.shorthand) return;
      const start = p.node.start;
      const end = p.node.end;
      if (source.slice(start, end) !== p.node.name) return;
      edits.push([start, end, neu]);
    },
  });
  if (!edits.length) continue;
  edits.sort((a, b) => b[0] - a[0]);
  let next = source;
  for (const [start, end, neu] of edits) next = next.slice(0, start) + neu + next.slice(end);
  parse(next);
  fs.writeFileSync(file, next);
  typeEdits += edits.length;
}
console.log("type identifier edits", typeEdits);

const initPath = path.join(root, "Layouts", "Game", "GameInitchihbkpormdcangvacrsz.tsx");
const initSrc = fs.readFileSync(initPath, "utf8");
const initNext = initSrc.replaceAll("'levechihbkpormdcangvacrszls'", "'levels'");
if (initNext !== initSrc) {
  parse(initNext);
  fs.writeFileSync(initPath, initNext);
  console.log("route strings restored");
}

function exportedNames(ast) {
  const names = new Set();
  traverse(ast, {
    ExportNamedDeclaration(p) {
      const decl = p.node.declaration;
      if (decl && decl.id && decl.id.name) names.add(decl.id.name);
      if (decl && decl.declarations) {
        for (const d of decl.declarations) if (d.id && d.id.type === "Identifier") names.add(d.id.name);
      }
      for (const spec of p.node.specifiers || []) {
        if (spec.exported && spec.exported.type === "Identifier") names.add(spec.exported.name);
      }
    },
  });
  return names;
}

function resolveRef(fromFile, ref) {
  const base = path.resolve(path.dirname(fromFile), ref);
  const candidates = [base, `${base}.ts`, `${base}.tsx`, `${base}.js`, path.join(base, "index.ts"), path.join(base, "index.tsx")];
  return candidates.find((c) => fs.existsSync(c)) || null;
}

const exportIndex = new Map();
const astByFile = new Map();
for (const file of [...tsFiles, path.join(root, "App.tsx")].filter((f) => fs.existsSync(f))) {
  const source = fs.readFileSync(file, "utf8");
  const ast = parse(source);
  astByFile.set(file, { ast, source });
  exportIndex.set(file, exportedNames(ast));
}

function ownersOf(name) {
  const hits = [];
  for (const [file, names] of exportIndex) if (names.has(name)) hits.push(file);
  return hits;
}

let moved = 0;
for (const file of tsFiles) {
  const source = fs.readFileSync(file, "utf8");
  const ast = parse(source);
  const removals = [];
  const additions = [];
  traverse(ast, {
    ImportDeclaration(p) {
      const src = p.node.source.value;
      if (typeof src !== "string" || !src.startsWith(".")) return;
      const target = resolveRef(file, src);
      if (!target) return;
      const exported = exportIndex.get(target);
      if (!exported) return;
      const isType = p.node.importKind === "type";
      for (const spec of p.node.specifiers) {
        if (spec.type !== "ImportSpecifier") continue;
        const imported = spec.imported.type === "Identifier" ? spec.imported.name : spec.imported.value;
        if (exported.has(imported)) continue;
        const owners = ownersOf(imported);
        if (owners.length !== 1) {
          console.log("skip move", path.relative(root, file), imported, "owners", owners.length);
          continue;
        }
        const rel = "./" + path.relative(path.dirname(file), owners[0]).replace(/\\/g, "/").replace(/\.(ts|tsx)$/, "");
        additions.push({ name: imported, from: rel, isType: isType || spec.importKind === "type" });
        let start = spec.start;
        let end = spec.end;
        let left = start - 1;
        while (left >= 0 && /[ \t]/.test(source[left])) left--;
        let right = end;
        while (right < source.length && /[ \t]/.test(source[right])) right++;
        if (source[right] === ",") end = right + 1;
        else if (source[left] === ",") start = left;
        removals.push([start, end]);
        moved++;
      }
    },
  });
  if (!removals.length) continue;
  let next = applyRanges(source, removals);
  next = next.replace(/import\s+(type\s+)?\{\s*\}\s*from\s*['"][^'"]+['"];?\r?\n/g, "");
  const lines = additions.map((item) => `import ${item.isType ? "type " : ""}{ ${item.name} } from '${item.from}';`);
  const insertAt = next.indexOf("\n") >= 0 ? 0 : 0;
  next = lines.join("\n") + "\n" + next.slice(insertAt);
  parse(next);
  fs.writeFileSync(file, next);
}
console.log("moved imports", moved);

function stubFor(name, args) {
  if (args.length === 1 && args[0].type === "ArrayExpression") {
    return `function ${name}(nums: number[]): number {\n  let acc = 4;\n  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) % 251;\n  return acc;\n}\n`;
  }
  if (args.length === 1 && (args[0].type === "StringLiteral" || args[0].type === "TemplateLiteral")) {
    return `function ${name}(s: string): number {\n  let h = 5;\n  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 3) & 65535;\n  return h;\n}\n`;
  }
  if (args.length === 2) {
    return `function ${name}(n: number, k: number): number {\n  const x = (n ^ k) << 2;\n  return (x ^ 19) & 65535;\n}\n`;
  }
  if (args.length === 3) {
    return `function ${name}(n: number, lo: number, hi: number): number {\n  return n < lo ? lo : n > hi ? hi : n;\n}\n`;
  }
  return null;
}

let stubs = 0;
for (const file of tsFiles) {
  const source = fs.readFileSync(file, "utf8");
  const ast = parse(source);
  const needed = new Map();
  traverse(ast, {
    ExpressionStatement(p) {
      const expr = p.node.expression;
      if (!expr || expr.type !== "UnaryExpression" || expr.operator !== "void") return;
      const call = expr.argument;
      if (!call || call.type !== "CallExpression" || call.callee.type !== "Identifier") return;
      const name = call.callee.name;
      if (!isHelperName(name)) return;
      if (p.scope.hasBinding(name)) return;
      if (!needed.has(name)) needed.set(name, call.arguments);
    },
  });
  if (!needed.size) continue;
  let extra = "\n";
  for (const [name, args] of needed) {
    const owners = ownersOf(name);
    if (owners.length === 1 && owners[0] !== file) {
      const rel = "./" + path.relative(path.dirname(file), owners[0]).replace(/\\/g, "/").replace(/\.(ts|tsx)$/, "");
      extra = `import { ${name} } from '${rel}';\n` + extra;
      continue;
    }
    const body = stubFor(name, args);
    if (!body) {
      console.log("no stub shape", path.relative(root, file), name, args.map((a) => a.type).join(","));
      continue;
    }
    extra += body;
    stubs++;
  }
  const next = source + extra;
  parse(next);
  fs.writeFileSync(file, next);
}
console.log("local stubs", stubs);

function stripJavaHelperSinks(file) {
  const source = fs.readFileSync(file, "utf8");
  if (!source.includes("ObfV")) return 0;
  const lines = source.split(/\r?\n/);
  const nl = source.includes("\r\n") ? "\r\n" : "\n";
  let depth = 0;
  let helperDepth = -1;
  let removed = 0;
  const kept = [];
  for (const line of lines) {
    const open = (line.match(/\{/g) || []).length;
    const close = (line.match(/\}/g) || []).length;
    const sig = /ObfV\d+/.test(line) && /\(.*\)/.test(line) && /\{/.test(line);
    if (sig && helperDepth < 0) helperDepth = depth;
    const inHelper = helperDepth >= 0 && depth >= helperDepth;
    const isSink = /SinkV\d+/.test(line) && /@Suppress|int |final /.test(line);
    if (inHelper && isSink && !/private static int /.test(line)) {
      removed++;
      depth += open - close;
      if (helperDepth >= 0 && depth <= helperDepth) helperDepth = -1;
      continue;
    }
    kept.push(line);
    depth += open - close;
    if (helperDepth >= 0 && depth <= helperDepth) helperDepth = -1;
  }
  if (removed) fs.writeFileSync(file, kept.join(nl));
  return removed;
}

let javaSinks = 0;
for (const file of walk(path.join(root, "android", "app", "src", "main", "java"))) {
  if (!file.endsWith(".java")) continue;
  if (file.includes("rnobfuscator")) continue;
  javaSinks += stripJavaHelperSinks(file);
}
console.log("java helper sinks removed", javaSinks);

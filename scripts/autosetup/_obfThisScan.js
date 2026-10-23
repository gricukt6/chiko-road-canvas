const fs = require("node:fs");
const path = require("node:path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const root = path.resolve(__dirname, "..", "..");
const FRAG = "chihbkpormdcangvacrsz";

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

function resolveRef(fromFile, ref) {
  const base = path.resolve(path.dirname(fromFile), ref);
  const candidates = [base, `${base}.ts`, `${base}.tsx`, `${base}.js`, `${base}.jsx`, path.join(base, "index.ts"), path.join(base, "index.tsx")];
  return candidates.find((c) => fs.existsSync(c)) || null;
}

function parse(source, file) {
  return parser.parse(source, { sourceType: "module", plugins: ["typescript", "jsx"] });
}

const files = [...walk(path.join(root, "services")), ...walk(path.join(root, "Layouts", "Game")), path.join(root, "App.tsx")].filter(
  (f) => fs.existsSync(f) && /\.(ts|tsx)$/.test(f),
);

const exportsByFile = new Map();
const parseFails = [];
for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  let ast;
  try {
    ast = parse(source, file);
  } catch (error) {
    parseFails.push(`${path.relative(root, file)}: ${error.message.split("\n")[0]}`);
    continue;
  }
  const names = new Set();
  let hasDefault = false;
  traverse(ast, {
    ExportNamedDeclaration(p) {
      const decl = p.node.declaration;
      if (decl) {
        if (decl.id && decl.id.name) names.add(decl.id.name);
        if (decl.declarations) {
          for (const d of decl.declarations) {
            if (d.id && d.id.type === "Identifier") names.add(d.id.name);
          }
        }
      }
      for (const spec of p.node.specifiers || []) {
        if (spec.exported && spec.exported.type === "Identifier") names.add(spec.exported.name);
      }
    },
    ExportDefaultDeclaration() {
      hasDefault = true;
    },
    ExportAllDeclaration() {
      names.add("*");
    },
  });
  exportsByFile.set(file, { names, hasDefault, ast, source });
}

const missingExports = [];
const unboundVoids = [];
const uiHits = [];
const voidInHelper = [];
for (const file of files) {
  const info = exportsByFile.get(file);
  if (!info) continue;
  traverse(info.ast, {
    ImportDeclaration(p) {
      const src = p.node.source.value;
      if (typeof src !== "string" || !src.startsWith(".")) return;
      const target = resolveRef(file, src);
      if (!target) {
        missingExports.push(`${path.relative(root, file)} MISSING FILE ${src}`);
        return;
      }
      const exp = exportsByFile.get(target);
      if (!exp) return;
      for (const spec of p.node.specifiers) {
        if (spec.type === "ImportDefaultSpecifier" && !exp.hasDefault) {
          missingExports.push(`${path.relative(root, file)} default from ${src}`);
        }
        if (spec.type === "ImportSpecifier") {
          const imported = spec.imported.type === "Identifier" ? spec.imported.name : spec.imported.value;
          if (exp.names.has("*")) continue;
          if (!exp.names.has(imported)) {
            missingExports.push(`${path.relative(root, file)} { ${imported} } from ${src}`);
          }
        }
      }
    },
    Function(fnPath) {
      const id = fnPath.node.id && fnPath.node.id.name;
      if (!id || !/ObfV\d+|MixSeed$|FoldRange$|ClampSpan$/.test(id)) return;
      const body = fnPath.node.body;
      if (!body || body.type !== "BlockStatement") return;
      for (const stmt of body.body) {
        if (
          stmt.type === "ExpressionStatement" &&
          stmt.expression.type === "UnaryExpression" &&
          stmt.expression.operator === "void"
        ) {
          voidInHelper.push(`${path.relative(root, file)} ${id}`);
          break;
        }
      }
    },
    ExpressionStatement(p) {
      const expr = p.node.expression;
      if (!expr || expr.type !== "UnaryExpression" || expr.operator !== "void") return;
      const call = expr.argument;
      if (!call || call.type !== "CallExpression" || call.callee.type !== "Identifier") return;
      const name = call.callee.name;
      if (!/ObfV\d+|MixSeed$|FoldRange$|ClampSpan$/.test(name)) return;
      if (!p.scope.hasBinding(name)) unboundVoids.push(`${path.relative(root, file)} ${name}`);
    },
  });
  if (!file.includes(`${path.sep}Layouts${path.sep}Game${path.sep}`)) continue;
  traverse(info.ast, {
    StringLiteral(p) {
      if (p.parent && p.parent.type === "ImportDeclaration") return;
      if (p.parent && p.parent.type === "ExportNamedDeclaration") return;
      if (typeof p.node.value === "string" && p.node.value.includes(FRAG)) {
        uiHits.push(`${path.relative(root, file)} STR ${JSON.stringify(p.node.value).slice(0, 140)}`);
      }
    },
    TemplateElement(p) {
      const raw = (p.node.value && p.node.value.cooked) || "";
      if (raw.includes(FRAG)) uiHits.push(`${path.relative(root, file)} TPL ${JSON.stringify(raw).slice(0, 140)}`);
    },
    JSXText(p) {
      if (p.node.value && p.node.value.includes(FRAG)) {
        uiHits.push(`${path.relative(root, file)} JSX ${JSON.stringify(p.node.value).slice(0, 140)}`);
      }
    },
  });
}

const uniq = (arr) => [...new Set(arr)];
console.log("parseFails", parseFails.length);
for (const line of parseFails) console.log(line);
console.log("missingExports", uniq(missingExports).length);
for (const line of uniq(missingExports).slice(0, 80)) console.log(line);
console.log("unboundVoids", uniq(unboundVoids).length);
for (const line of uniq(unboundVoids).slice(0, 40)) console.log(line);
console.log("voidInHelper", uniq(voidInHelper).length);
for (const line of uniq(voidInHelper).slice(0, 20)) console.log(line);
console.log("uiHits", uniq(uiHits).length);
for (const line of uniq(uiHits).slice(0, 60)) console.log(line);

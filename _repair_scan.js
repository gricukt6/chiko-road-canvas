const fs = require('fs');
const path = require('path');
const root = process.cwd();
const exts = ['.ts', '.tsx', '.js', '.jsx', '.kt', '.java'];
const dirs = ['Layouts', 'services', 'android/app/src/main/java', 'android/app/src/main/kotlin'];
const files = [];
for (const f of ['App.tsx', 'index.js', 'index.ts']) {
  const p = path.join(root, f);
  if (fs.existsSync(p)) files.push(p);
}
function walk(d) {
  if (!fs.existsSync(d)) return;
  for (const ent of fs.readdirSync(d, { withFileTypes: true })) {
    if (ent.name === 'node_modules' || ent.name === 'build' || ent.name === '.git') continue;
    const p = path.join(d, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (exts.some((e) => ent.name.endsWith(e))) files.push(p);
  }
}
for (const d of dirs) walk(path.join(root, d));

function resolveSpec(from, spec) {
  if (!spec.startsWith('.')) return null;
  const base = path.resolve(path.dirname(from), spec);
  const cands = [base, ...exts.map((e) => base + e), ...exts.map((e) => path.join(base, 'index' + e))];
  for (const c of cands) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  }
  return null;
}

function exportsOf(file) {
  const text = fs.readFileSync(file, 'utf8');
  const names = new Set();
  let m;
  const re = /export\s+(?:async\s+)?(?:function|const|let|var|class|type|interface|enum)\s+([A-Za-z0-9_]+)/g;
  while ((m = re.exec(text))) names.add(m[1]);
  const re2 = /export\s*\{([^}]+)\}/g;
  while ((m = re2.exec(text))) {
    for (const part of m[1].split(',')) {
      const t = part.trim();
      if (!t) continue;
      const as = t.split(/\s+as\s+/);
      names.add((as[1] || as[0]).trim());
    }
  }
  if (/export\s+default\b/.test(text)) names.add('default');
  return names;
}

const missing = [];
const badNamed = [];
for (const f of files) {
  if (!/\.(ts|tsx|js|jsx)$/.test(f)) continue;
  const text = fs.readFileSync(f, 'utf8');
  let m;
  const re = /(?:from\s+|require\(\s*)['"](\.[^'"]+)['"]/g;
  while ((m = re.exec(text))) {
    const spec = m[1];
    const resolved = resolveSpec(f, spec);
    if (!resolved) missing.push(path.relative(root, f) + ' -> ' + spec);
  }
  const reN = /import\s+(?:type\s+)?\{([^}]+)\}\s+from\s+['"](\.[^'"]+)['"]/g;
  while ((m = reN.exec(text))) {
    const spec = m[2];
    const resolved = resolveSpec(f, spec);
    if (!resolved) continue;
    const names = exportsOf(resolved);
    for (const part of m[1].split(',')) {
      let t = part.replace(/\/\*[\s\S]*?\*\//g, '').trim();
      if (!t) continue;
      t = t.replace(/^type\s+/, '');
      const as = t.split(/\s+as\s+/);
      const imported = as[0].trim();
      if (!imported || imported === 'type') continue;
      if (!names.has(imported)) {
        badNamed.push(
          path.relative(root, f) +
            ' imports {' +
            imported +
            '} from ' +
            spec +
            ' (resolved ' +
            path.relative(root, resolved) +
            ')'
        );
      }
    }
  }
}
const voidMissing = [];
const defaultMissing = [];
const syntaxFlags = [];
for (const f of files) {
  if (!/\.(ts|tsx|js|jsx)$/.test(f)) continue;
  const text = fs.readFileSync(f, 'utf8');
  const imported = new Set();
  const local = new Set();
  let m;
  const reImp = /import\s+(?:type\s+)?(?:\{([^}]+)\}|([A-Za-z0-9_]+)|(\*\s+as\s+[A-Za-z0-9_]+))/g;
  while ((m = reImp.exec(text))) {
    if (m[1]) {
      for (const part of m[1].split(',')) {
        let t = part.replace(/\/\*[\s\S]*?\*\//g, '').trim().replace(/^type\s+/, '');
        if (!t) continue;
        const as = t.split(/\s+as\s+/);
        imported.add((as[1] || as[0]).trim());
      }
    }
    if (m[2]) imported.add(m[2]);
    if (m[3]) imported.add(m[3].replace(/^\*\s+as\s+/, ''));
  }
  const reLoc = /(?:function|class|const|let|var|type|interface|enum)\s+([A-Za-z0-9_]+)/g;
  while ((m = reLoc.exec(text))) local.add(m[1]);
  const reVoid = /\bvoid\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(/g;
  const seen = new Set();
  while ((m = reVoid.exec(text))) {
    const name = m[1];
    if (imported.has(name) || local.has(name) || seen.has(name)) continue;
    seen.add(name);
    voidMissing.push(path.relative(root, f) + ' void ' + name);
  }
  const reDef = /import\s+([A-Za-z0-9_]+)\s+from\s+['"](\.[^'"]+)['"]/g;
  while ((m = reDef.exec(text))) {
    const resolved = resolveSpec(f, m[2]);
    if (!resolved) continue;
    const src = fs.readFileSync(resolved, 'utf8');
    if (!/export\s+default\b/.test(src)) {
      defaultMissing.push(path.relative(root, f) + ' default from ' + m[2]);
    }
  }
  if (/:\s*\{[^}]*\bvoid\b/.test(text)) syntaxFlags.push(path.relative(root, f) + ' void-in-type?');
}

const ktIssues = [];
const ktFiles = files.filter((f) => /\.(kt|java)$/.test(f));
for (const f of ktFiles) {
  const text = fs.readFileSync(f, 'utf8');
  const rel = path.relative(root, f);
  const funs = [];
  const reFun = /(?:^|\n)\s*(?:(?:public|private|internal|protected|override|open|suspend|inline|operator)\s+)*fun\s+([A-Za-z0-9_]+)/g;
  let m;
  const counts = {};
  while ((m = reFun.exec(text))) {
    counts[m[1]] = (counts[m[1]] || 0) + 1;
  }
  for (const [n, c] of Object.entries(counts)) {
    if (c > 1) ktIssues.push(rel + ' duplicate fun ' + n + ' x' + c);
  }
  const objCounts = {};
  const reObj = /(?:^|\n)\s*(?:(?:public|private|internal|protected)\s+)*object\s+([A-Za-z0-9_]+)/g;
  while ((m = reObj.exec(text))) objCounts[m[1]] = (objCounts[m[1]] || 0) + 1;
  for (const [n, c] of Object.entries(objCounts)) {
    if (c > 1) ktIssues.push(rel + ' duplicate object ' + n + ' x' + c);
  }
  const base = path.basename(f).replace(/\.(kt|java)$/, '');
  const declared = [];
  const reCls = /(?:class|object|interface)\s+([A-Za-z0-9_]+)/g;
  while ((m = reCls.exec(text))) declared.push(m[1]);
  if (declared.length && !declared.includes(base) && !text.includes('package ')) {
    ktIssues.push(rel + ' class names ' + declared.join(',') + ' file ' + base);
  }
  if (declared.length && !declared.includes(base)) {
    ktIssues.push(rel + ' file/class mismatch file=' + base + ' declared=' + declared.slice(0, 8).join(','));
  }
}

const ktText = new Map();
for (const f of ktFiles) ktText.set(f, fs.readFileSync(f, 'utf8'));
const privFuns = [];
for (const f of ktFiles) {
  const text = ktText.get(f);
  const rel = path.relative(root, f);
  const re = /private\s+fun\s+([A-Za-z0-9_]+)/g;
  let m;
  while ((m = re.exec(text))) privFuns.push({ file: rel, name: m[1], abs: f });
}
const cross = [];
for (const pf of privFuns) {
  const re = new RegExp('\\b' + pf.name + '\\s*\\(');
  for (const f of ktFiles) {
    if (f === pf.abs) continue;
    if (re.test(ktText.get(f))) cross.push(path.relative(root, f) + ' calls private ' + pf.name + ' from ' + pf.file);
  }
}
const dupVal = [];
for (const f of ktFiles) {
  const text = ktText.get(f);
  const counts = {};
  const re = /(?:^|\n)\s*(?:(?:public|private|internal|protected|override|open|const|lateinit)\s+)*val\s+([A-Za-z0-9_]+)/g;
  let m;
  while ((m = re.exec(text))) counts[m[1]] = (counts[m[1]] || 0) + 1;
  for (const [n, c] of Object.entries(counts)) {
    if (c > 1) dupVal.push(path.relative(root, f) + ' duplicate val ' + n + ' x' + c);
  }
}
console.log('---PRIVATE CROSS---');
console.log(cross.join('\n') || '(none)');
console.log('CROSS COUNT', cross.length);
console.log('---DUP VAL---');
console.log(dupVal.join('\\n') || '(none)');
console.log('FILES', files.length);
console.log('---MISSING---');
console.log(missing.join('\n') || '(none)');
console.log('---BAD NAMED---');
console.log(badNamed.join('\n') || '(none)');
console.log('BAD COUNT', badNamed.length);
console.log('---VOID MISSING---');
console.log(voidMissing.join('\n') || '(none)');
console.log('VOID COUNT', voidMissing.length);
console.log('---DEFAULT MISSING---');
console.log(defaultMissing.join('\n') || '(none)');
console.log('---SYNTAX---');
console.log(syntaxFlags.join('\n') || '(none)');
console.log('---KT---');
console.log(ktIssues.join('\n') || '(none)');

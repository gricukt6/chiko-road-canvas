const fs = require("node:fs");
const path = require("node:path");
function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "build") continue;
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f, acc);
    else acc.push(f);
  }
  return acc;
}
const root = path.join("android", "app", "src", "main", "java");
for (const file of walk(root)) {
  if (!/\.(java|kt)$/.test(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  if (text.includes("autosetup-decoy") || text.includes("dex-lanes") || file.includes("rnobfuscator")) continue;
  const re = file.endsWith(".kt") ? /\bfun\s+([A-Za-z_]\w*)\s*\(/g : /\b(?:int|void|boolean|String|long|Uri|Task)\s+([A-Za-z_]\w*)\s*\(/g;
  const counts = new Map();
  let m;
  while ((m = re.exec(text))) counts.set(m[1], (counts.get(m[1]) || 0) + 1);
  for (const [name, count] of counts) {
    if (count > 1) console.log(`${count} ${path.relative(".", file)} ${name}`);
  }
}

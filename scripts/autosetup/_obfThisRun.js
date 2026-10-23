const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const { transformTypeScript } = require("./_obfBatchVnext");

const root = path.resolve(__dirname, "..", "..");
const finishPath = path.join(__dirname, "_obfSkillFinish.js");
const finishSrc = fs
  .readFileSync(finishPath, "utf8")
  .replace(
    /\r?\nmain\(\)\.catch[\s\S]*$/,
    "\nmodule.exports = { dedupeImports, dropDuplicateFunctions, renameSource, repairMissedAssignments, parseTs };\n",
  );
const finish = new Module(finishPath);
finish.filename = finishPath;
finish.paths = Module._nodeModulePaths(__dirname);
finish._compile(finishSrc, finishPath);
const { dedupeImports, dropDuplicateFunctions, renameSource, repairMissedAssignments, parseTs } = finish.exports;

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

const targets = [...walk(path.join(root, "services")), ...walk(path.join(root, "Layouts", "Game"))].filter((f) =>
  /\.(ts|tsx)$/.test(f),
);

let importDrops = 0;
let fnDrops = 0;
const parseFails = [];
for (const file of targets) {
  let source = fs.readFileSync(file, "utf8");
  const imp = dedupeImports(source);
  const fn = dropDuplicateFunctions(imp.next);
  if (imp.removed || fn.removed) {
    source = fn.next;
    fs.writeFileSync(file, source);
    importDrops += imp.removed;
    fnDrops += fn.removed;
  }
  try {
    parseTs(source, file);
  } catch (error) {
    parseFails.push(`${path.relative(root, file)}: ${error.message.split("\n")[0]}`);
  }
}
console.log(`deduped imports ${importDrops}, functions ${fnDrops}`);
console.log(`parse fails ${parseFails.length}`);
for (const line of parseFails) console.log(line);

const harvest = path.join(root, "services", "SignalHarveschihbkpormdcangvacrszt.ts");
const harvestSrc = fs.readFileSync(harvest, "utf8");
if (!/obfuscation-batch:v34/.test(harvestSrc) && !/SignalHarves[\w]*ObfV34/.test(harvestSrc)) {
  const next = transformTypeScript(harvestSrc, harvest);
  fs.writeFileSync(harvest, next);
  console.log("rebatched harvest");
} else {
  console.log("harvest already has latest batch");
}

const game = walk(path.join(root, "Layouts", "Game")).filter((f) => /\.(ts|tsx)$/.test(f));
let renamed = 0;
const renameFail = [];
for (const file of game) {
  const source = fs.readFileSync(file, "utf8");
  try {
    const next = renameSource(source, file);
    if (next !== source) {
      fs.writeFileSync(file, next);
      renamed++;
    }
  } catch (error) {
    renameFail.push(`${path.relative(root, file)}: ${error.message.split("\n")[0]}`);
  }
}
console.log(`renamed files ${renamed}`);
for (const line of renameFail) console.log(line);

repairMissedAssignments()
  .then(() => console.log("assign repair done"))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const fs = require("fs");
const path = require("path");
const Module = require("module");

process.chdir("W:\\");
const configPath = "W:\\metro.config.js";
const config = require(configPath);
console.log("CONFIG_ROOT=" + JSON.stringify(config.projectRoot));
const defaults = require("metro-config/src/defaults/defaults.js");
console.log("MODULE_SYSTEM=" + JSON.stringify(defaults.moduleSystem));
console.log("SAME=" + (path.normalize(config.projectRoot).toLowerCase() === path.normalize(path.dirname(path.dirname(path.dirname(defaults.moduleSystem)))).toLowerCase()));
console.log("FILE_UNDER_ROOT=" + defaults.moduleSystem.toLowerCase().startsWith(path.resolve(config.projectRoot).toLowerCase()));
console.log("REAL_DIRNAME=" + JSON.stringify(fs.realpathSync.native(path.dirname(configPath))));

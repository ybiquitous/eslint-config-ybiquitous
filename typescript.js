const importPlugin = require("eslint-plugin-import");

const typescript = require("./rules/plugins/typescript.js");
const index = require("./index.js");

module.exports = [index, typescript, importPlugin.flatConfigs.typescript];

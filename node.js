const index = require("./index.js");
const node = require("./rules/plugins/node.js");

module.exports = [...index, ...node];

const compat = require("./rules/plugins/compat.js");
const index = require("./index.js");

module.exports = [...index, ...compat];

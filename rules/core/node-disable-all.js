const nodeRules = require("./node");

module.exports = {
  rules: Object.keys(nodeRules.rules).reduce(
    (newRules, ruleId) => Object.assign(newRules, { [ruleId]: "off" }),
    {}
  ),
};

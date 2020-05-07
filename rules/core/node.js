// NOTE: Node-specific rules are deprecated and will be removed.
//
// See https://eslint.org/blog/2020/02/whats-coming-in-eslint-7.0.0#deprecating-node-js-commonjs-specific-rules

module.exports = {
  rules: {
    "callback-return": "off",
    "global-require": "off",
    "handle-callback-err": "off",
    "no-buffer-constructor": "off",
    "no-mixed-requires": "off",
    "no-new-require": "off",
    "no-path-concat": "off",
    "no-process-env": "off",
    "no-process-exit": "off",
    "no-restricted-modules": "off",
    "no-sync": "off",
  },
};

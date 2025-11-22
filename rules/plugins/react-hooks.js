module.exports = {
  extends: ["plugin:react-hooks/recommended"],
  rules: {
    // Disable all non-recommended rules.
    "react-hooks/automatic-effect-dependencies": "off",
    "react-hooks/capitalized-calls": "off",
    "react-hooks/fbt": "off",
    "react-hooks/fire": "off",
    "react-hooks/hooks": "off",
    "react-hooks/invariant": "off",
    "react-hooks/memoized-effect-dependencies": "off",
    "react-hooks/no-deriving-state-in-effects": "off",
    "react-hooks/rule-suppression": "off",
    "react-hooks/syntax": "off",
    "react-hooks/todo": "off",
    "react-hooks/void-use-memo": "off",
  },
};

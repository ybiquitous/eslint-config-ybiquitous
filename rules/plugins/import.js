module.exports = {
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/react",
  ],

  rules: {
    "import/dynamic-import-chunkname": "off",
    "import/exports-last": "error",
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
        mjs: "never",
      },
    ],
    "import/first": "error",
    "import/group-exports": "off",
    "import/max-dependencies": "warn",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-amd": "error",
    "import/no-anonymous-default-export": "error",
    "import/no-commonjs": "off",
    "import/no-cycle": "error",
    "import/no-default-export": "off",
    "import/no-deprecated": "error",
    "import/no-dynamic-require": "warn",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test/**",
          "spec/**",
          "**/__tests__/**",
          "test.{js,jsx}",
          "**/*.{test,spec}.{js,jsx}",
          "**/webpack.config.js",
          "**/webpack.config.*.js",
        ],
        optionalDependencies: false,
      },
    ],
    "import/no-internal-modules": "warn",
    "import/no-mutable-exports": "error",
    "import/no-named-default": "error",
    "import/no-namespace": "error",
    "import/no-nodejs-modules": "off",
    "import/no-restricted-paths": "off",
    "import/no-self-import": "error",
    "import/no-unassigned-import": "off",
    "import/no-useless-path-segments": "error",
    "import/no-webpack-loader-syntax": "error",
    "import/order": "error",
    "import/prefer-default-export": "error",
    "import/unambiguous": "off",
  },

  settings: {
    "import/extensions": [".js", ".jsx", ".mjs"],
    "import/ignore": ["\\.(coffee|scss|css|svg|png|gif|jpg)$"],
    "import/resolver": {
      node: {
        extensions: [".js", ".json", ".mjs"],
      },
    },
  },
};

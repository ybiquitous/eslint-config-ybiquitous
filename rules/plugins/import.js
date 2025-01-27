const importPlugin = require("eslint-plugin-import");

module.exports = [
  importPlugin.flatConfigs.recommended,

  {
    name: "ybiquitous/import",
    rules: {
      "import/consistent-type-specifier-style": "off",
      "import/dynamic-import-chunkname": "off",
      "import/exports-last": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          jsx: "never",
          ts: "never",
        },
      ],
      "import/first": "error",
      "import/group-exports": "off",
      "import/max-dependencies": ["warn", { ignoreTypeImports: true, max: 20 }],
      "import/newline-after-import": "error",
      "import/no-absolute-path": "error",
      "import/no-amd": "error",
      "import/no-anonymous-default-export": "error",
      "import/no-commonjs": "off",
      "import/no-cycle": "error",
      "import/no-default-export": "off",
      "import/no-deprecated": "error",
      "import/no-duplicates": "off", // use core rule `no-duplicate-imports`
      "import/no-dynamic-require": "warn",
      "import/no-empty-named-blocks": "error",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "test/**",
            "spec/**",
            "**/__tests__/**",
            "test.{js,jsx,ts,tsx}",
            "**/*.{test,spec}.{js,jsx,ts,tsx}",
            "**/webpack.config.{js,ts}",
            "**/webpack.config.*.{js,ts}",
          ],
          optionalDependencies: false,
        },
      ],
      "import/no-import-module-exports": "off",
      "import/no-internal-modules": "warn",
      "import/no-mutable-exports": "error",
      "import/no-named-default": "error",
      "import/no-named-export": "off",
      "import/no-namespace": "off",
      "import/no-nodejs-modules": "off",
      "import/no-relative-packages": "off",
      "import/no-relative-parent-imports": "off",
      "import/no-restricted-paths": "off",
      "import/no-self-import": "error",
      "import/no-unassigned-import": "off",
      "import/no-unused-modules": "warn",
      "import/no-useless-path-segments": "error",
      "import/no-webpack-loader-syntax": "error",
      "import/order": ["error", { alphabetize: { order: "asc" } }],
      "import/prefer-default-export": "off",
      "import/unambiguous": "off",
    },

    settings: {
      "import/ignore": ["\\.(coffee|scss|css|svg|png|gif|jpg)$"],
    },
  },
];

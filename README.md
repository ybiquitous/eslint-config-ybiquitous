# eslint-config-ybiquitous

[![npm version](https://badge.fury.io/js/eslint-config-ybiquitous.svg)](https://badge.fury.io/js/eslint-config-ybiquitous)
[![Build Status](https://travis-ci.org/ybiquitous/eslint-config-ybiquitous.svg?branch=master)](https://travis-ci.org/ybiquitous/eslint-config-ybiquitous)
[![dependencies Status](https://david-dm.org/ybiquitous/eslint-config-ybiquitous/status.svg)](https://david-dm.org/ybiquitous/eslint-config-ybiquitous)
[![devDependencies Status](https://david-dm.org/ybiquitous/eslint-config-ybiquitous/dev-status.svg)](https://david-dm.org/ybiquitous/eslint-config-ybiquitous?type=dev)
[![Conventional Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

This package is [ybiquitous](https://github.com/ybiquitous)'s personal ESLint configuration.
For details, please see "[*Shareable Configs*](https://eslint.org/docs/developer-guide/shareable-configs)"
in ESLint documentation.

This package depends almost on following packages:

- [`eslint-config-airbnb`](https://npm.im/eslint-config-airbnb)
- [`eslint-config-prettier`](https://npm.im/eslint-config-prettier)

About other packages, please check `dependencies` in [package.json](package.json).

## Install

via [npm](https://npm.im/) / [Yarn](https://yarnpkg.com/):

```sh
npm install --save-dev eslint eslint-config-ybiquitous prettier

# or
yarn add --dev eslint eslint-config-ybiquitous prettier
```

## Change Log

Please see [here](CHANGELOG.md).

## Use

Edit `.eslintrc`:

```json
{
  "extends": "ybiquitous"
}
```

If you do not need [`eslint-plugin-compat`](https://npm.im/eslint-plugin-compat),
`ybiquitous/base` is recommended:

```json
{
  "extends": "ybiquitous/base"
}
```

If you use this package only on Node.js, `ybiquitous/node` is recommended:

```json
{
  "extends": "ybiquitous/node"
}
```

## Release

Run the following commands:

1. `git checkout master`
1. `git pull`
1. `yarn release:dry-run`
1. `yarn release`
1. `git push --follow-tags`
   (`npm publish` does not need, because it will be executed in CI)

## License

[MIT](LICENSE) © ybiquitous

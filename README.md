# eslint-config-ybiquitous

[![npm version](https://badge.fury.io/js/eslint-config-ybiquitous.svg)](https://badge.fury.io/js/eslint-config-ybiquitous)
[![Build Status](https://travis-ci.org/ybiquitous/eslint-config-ybiquitous.svg?branch=master)](https://travis-ci.org/ybiquitous/eslint-config-ybiquitous)
[![dependencies Status](https://david-dm.org/ybiquitous/eslint-config-ybiquitous/status.svg)](https://david-dm.org/ybiquitous/eslint-config-ybiquitous)
[![devDependencies Status](https://david-dm.org/ybiquitous/eslint-config-ybiquitous/dev-status.svg)](https://david-dm.org/ybiquitous/eslint-config-ybiquitous?type=dev)
[![Conventional Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

This package is [ybiquitous](https://github.com/ybiquitous)'s personal ESLint configuration.
For details, please see "[*Shareable Configs*](https://eslint.org/docs/developer-guide/shareable-configs)"
in ESLint documentation.

This package depends almost on
[`eslint-config-airbnb`](https://npmjs.com/eslint-config-airbnb) package.

## Install

[npm](https://npmjs.com/):

```sh
npm install --save-dev eslint eslint-config-ybiquitous
```

[Yarn](https://yarnpkg.com/):

```sh
yarn add --dev eslint eslint-config-ybiquitous
```

For past releases, please see [Change Log](CHANGELOG.md).

## Use

Edit `.eslintrc`:

```json
{
  "extends": "ybiquitous"
}
```

Or, if you do not need [`eslint-plugin-compat`](https://npmjs.com/eslint-plugin-compat):

```json
{
  "extends": "ybiquitous/base"
}
```

## Release

1. `git checkout master`
1. `git pull origin master`
1. `yarn release` (or `yarn release:dry-run` without any changes)
1. `git push --follow-tags origin master`
   (`npm publish` does not need, because it will be executed in CI)

## License

[MIT](LICENSE) © ybiquitous

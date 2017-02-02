[![npm version](https://badge.fury.io/js/eslint-config-ybiquitous.svg)](https://badge.fury.io/js/eslint-config-ybiquitous)
[![Build Status](https://travis-ci.org/ybiquitous/eslint-config-ybiquitous.svg?branch=master)](https://travis-ci.org/ybiquitous/eslint-config-ybiquitous)

# eslint-config-ybiquitous

[ybiquitous](https://github.com/ybiquitous)'s ESLint configuration. See [ESLint Shareable Configs documentation](http://eslint.org/docs/developer-guide/shareable-configs).

This package borrows almost from [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

## Install

via NPM:

```sh
npm install --save-dev eslint eslint-config-ybiquitous
```

via Yarn:

```sh
yarn add --dev eslint eslint-config-ybiquitous
```

`.eslintrc`:

``` json
{"extends": "ybiquitous"}
```

## Release

```sh
yarn version --new-version [version]
git push
git push --tags
```

## License

See [LICENSE](LICENSE).

## Changelog

See [CHANGELOG](CHANGELOG.md).

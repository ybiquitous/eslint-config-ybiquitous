[![npm version](https://badge.fury.io/js/eslint-config-ybiquitous.svg)](https://badge.fury.io/js/eslint-config-ybiquitous)
[![Build Status](https://travis-ci.org/ybiquitous/eslint-config-ybiquitous.svg?branch=master)](https://travis-ci.org/ybiquitous/eslint-config-ybiquitous)
[![dependencies Status](https://david-dm.org/ybiquitous/eslint-config-ybiquitous/status.svg)](https://david-dm.org/ybiquitous/eslint-config-ybiquitous)
[![devDependencies Status](https://david-dm.org/ybiquitous/eslint-config-ybiquitous/dev-status.svg)](https://david-dm.org/ybiquitous/eslint-config-ybiquitous?type=dev)

# eslint-config-ybiquitous

This package is [ybiquitous](https://github.com/ybiquitous)'s ESLint configuration.
For details, please see ["Shareable Configs"](http://eslint.org/docs/developer-guide/shareable-configs) in ESLint documentation.

*This package depends almost on [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).*

## Install

via [npm](https://www.npmjs.com/):

```sh
$ npm install --save-dev eslint@3 eslint-config-ybiquitous
```

via [yarn](https://yarnpkg.com/):

```sh
$ yarn add --dev eslint@3 eslint-config-ybiquitous
```

Edit `.eslintrc`:

``` json
{
  "extends": "ybiquitous"
}
```

## Release

1. Update [CHANGELOG](CHANGELOG.md).
2. Run following commands.

```sh
$ yarn version
$ git push
$ git push --tags
```

## License

See [LICENSE](LICENSE).

## Changelog

See [CHANGELOG](CHANGELOG.md).

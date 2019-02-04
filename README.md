# eslint-config-ybiquitous

[![npm](https://img.shields.io/npm/v/eslint-config-ybiquitous.svg)](https://www.npmjs.com/package/eslint-config-ybiquitous)
[![node](https://img.shields.io/node/v/eslint-config-ybiquitous.svg)](https://github.com/ybiquitous/eslint-config-ybiquitous)
[![Build Status](https://travis-ci.org/ybiquitous/eslint-config-ybiquitous.svg?branch=master)](https://travis-ci.org/ybiquitous/eslint-config-ybiquitous)
[![dependencies Status](https://david-dm.org/ybiquitous/eslint-config-ybiquitous/status.svg)](https://david-dm.org/ybiquitous/eslint-config-ybiquitous)
[![MIT License](https://img.shields.io/github/license/ybiquitous/ybiq.svg)](LICENSE)
[![Conventional Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Changelog](https://img.shields.io/badge/changelog-here-blue.svg)](CHANGELOG.md)

> My personal ESLint configuration.

This package purpose is to collect some tips and plugins.

For more details about plugins used in this package,
please check `dependencies` field in [package.json](package.json).

## Install

```sh
npm install --save-dev eslint-config-ybiquitous

# peer deps (required)
npm install --save-dev eslint prettier

# peer deps (optional)
npm install --save-dev typescript
```

## Usage

Edit `.eslintrc` according to some following cases:

| Case       | Setting                            |
| ---------- | ---------------------------------- |
| Basic      | `extends: "ybiquitous"`            |
| Node.js    | `extends: "ybiquitous/node"`       |
| Browser    | `extends: "ybiquitous/browser"`    |
| React      | `extends: "ybiquitous/react"`      |
| TypeScript | `extends: "ybiquitous/typescript"` |

## Release

Run the following commands:

1.  `git checkout master`
2.  `git pull`
3.  `npm run release:dry-run`
4.  `npm run release`
5.  `git push --follow-tags`
    (`npm publish` does not need, because it will be executed in CI)

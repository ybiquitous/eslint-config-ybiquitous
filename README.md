# eslint-config-ybiquitous

[![npm](https://img.shields.io/npm/v/eslint-config-ybiquitous.svg)](https://www.npmjs.com/package/eslint-config-ybiquitous)
[![node](https://img.shields.io/node/v/eslint-config-ybiquitous.svg)](https://github.com/ybiquitous/eslint-config-ybiquitous)
[![MIT License](https://img.shields.io/github/license/ybiquitous/ybiq.svg)](LICENSE)
[![Conventional Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Changelog](https://img.shields.io/badge/changelog-here-blue.svg)](CHANGELOG.md)

> My personal ESLint configuration.

This package purpose is to collect some tips and plugins.

For more details about plugins used in this package,
please check `dependencies` field in [package.json](package.json).

## Install

When _not_ using TypeScript:

```sh
npm install --save-dev eslint-config-ybiquitous eslint prettier
```

When using TypeScript, install the following in addition:

```sh
npm install --save-dev @typescript-eslint/eslint-plugin
```

## Usage

Add any sharable configs to your ESLint configuration files, according to some following cases:

| Case       | Config                               |
| ---------- | ------------------------------------ |
| Basic      | `extends: ["ybiquitous"]`            |
| Node.js    | `extends: ["ybiquitous/node]`        |
| Browser    | `extends: ["ybiquitous/browser"]`    |
| React      | `extends: ["ybiquitous/react"]`      |
| TypeScript | `extends: ["ybiquitous/typescript"]` |

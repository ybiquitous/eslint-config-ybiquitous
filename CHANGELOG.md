# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [14.0.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v13.2.0...v14.0.0) (2021-05-21)

### ⚠ BREAKING CHANGES

- **node:** This package now targets ESM, not CommonJS. Also, it requires Node.js 12.20.0+.

### Features

- **deps:** bump peer eslint version `>=7.26.0` ([#933](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/933)) ([fb2b1a7](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/fb2b1a7750d85cbf45ebac280a9447bf39d3dc69))
- **deps:** bump peer typescript-eslint version `>=4.24.0` ([#930](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/930)) ([2a78d84](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/2a78d8400c28c26ac4494e0382ad1c0e186d8a29))
- **import:** disable `import/prefer-default-export` ([#935](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/935)) ([3c3c857](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/3c3c857021bed88168e8b989b4f0fcd9df45e88d))
- **node:** enable rules for ESM ([#937](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/937)) ([ea69c7c](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/ea69c7cbb01726b4ee03a1beb2ffa5bbecc98c20))

### Bug Fixes

- **deps:** bump eslint-plugin-import from 2.22.1 to 2.23.2 ([#932](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/932)) ([42f9b80](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/42f9b800e457387e25cb2e3a85f0a605da168f0d))
- **import:** better sorting imports ([#934](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/934)) ([ac3f10a](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/ac3f10a0b295290c66571137ce9017318ae2c34a))
- **import:** set `ignorePackages` to `import/extensions` ([#936](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/936)) ([119bde8](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/119bde83fdb4b4c21a07627c305e914e3b6e2d26))

## [13.2.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v13.1.0...v13.2.0) (2021-04-12)

### Features

- **typescript:** add `@typescript-eslint/no-unsafe-argument` rule ([#919](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/919)) ([a5f1f04](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/a5f1f0446d9b81a3a3f30cb8275aed6df73c74d4))

## [13.1.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v13.0.0...v13.1.0) (2021-04-01)

### Features

- **deps:** bump eslint-plugin-react from 7.22.0 to 7.23.1 ([#906](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/906)) ([18c802c](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/18c802ce0f707ff4c9ef5f3304da830feb85148f))
- **deps:** require eslint 7.23.0+ ([#910](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/910)) ([e6cedbb](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/e6cedbb8da84fb61e3b6d72307dbb464afe2b627))

### Bug Fixes

- **deps:** require @typescript-eslint/eslint-plugin 4.20.0+ ([#909](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/909)) ([1050471](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/105047163f57972cc57490c376de87ab107b6b51))

## [13.0.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v12.7.0...v13.0.0) (2021-03-10)

### ⚠ BREAKING CHANGES

- Node 12+ required now

### Features

- **deps:** simplify peer dependencies ([#899](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/899)) ([ea36a21](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/ea36a21b80096a62d683b21f80758e6155246d94))
- drop Node 10 support ([#897](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/897)) ([66ceeaa](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/66ceeaaa5c727ed2b7c89622736efa87c69244d1))
- **deps:** bump eslint-config-prettier from 7.2.0 to 8.1.0 ([#882](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/882)) ([c6f9ff6](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/c6f9ff67deb5d347a9601a0458edb7d7d96532d0))

## [12.7.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v12.6.0...v12.7.0) (2021-01-11)

### Features

- **deps:** bump eslint-plugin-react from 7.21.5 to 7.22.0 ([#852](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/852)) ([3373f00](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/3373f0054bc098dba055810a920cfc66f18785d3))

### Bug Fixes

- **deps:** bump @typescript-eslint/eslint-plugin from 4.10.0 to 4.12.0 ([#855](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/855)) ([2670afe](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/2670afef8266d43fc5af17e913d46f89ef422eaa))

## [12.6.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v12.5.0...v12.6.0) (2020-12-21)

### Features

- **core:** loosen `arrow-body-style` (error -> warn) ([#844](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/844)) ([fbb98ed](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/fbb98ed59b1e59441d47894757a466e838aaa13b))
- **deps:** bump @typescript-eslint/eslint-plugin from 4.9.1 to 4.10.0 ([#842](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/842)) ([0810cb0](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/0810cb094561c2f40cdd7cf6cb2c4d8ab4ed3857))

## [12.5.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v12.4.0...v12.5.0) (2020-12-10)

### Features

- **deps:** bump eslint from 7.14.0 to 7.15.0 ([#833](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/833)) ([40573e3](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/40573e38f16e9c19c0b5ddaa86f58db82afe11dd))
- **deps:** bump eslint-config-prettier from 6.15.0 to 7.0.0 ([#834](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/834)) ([658a425](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/658a4259cfe8bb8c23ea662f9b328291a81ccd7e))

## [12.4.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v12.3.0...v12.4.0) (2020-11-30)

### Features

- **deps:** bump eslint from 7.13.0 to 7.14.0 ([#826](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/826)) ([67dab6b](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/67dab6bf39f56ad54caeb3762bda83b466cf5ba7))

## [12.3.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v12.2.0...v12.3.0) (2020-11-17)

### Features

- **deps:** bump @typescript-eslint/eslint-plugin from 4.6.1 to 4.8.1 ([#823](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/823)) ([39642dc](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/39642dc0c14a91a831dc750a5bbc90cac12ecaab))

## [12.2.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v12.1.0...v12.2.0) (2020-11-05)

### Features

- **deps:** bump @typescript-eslint/eslint-plugin from 4.5.0 to 4.6.1 ([#812](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/812)) ([dd4a284](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/dd4a284b182beacd779305b2eac7c332da920837))

## [12.1.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v12.0.0...v12.1.0) (2020-10-07)

### Features

- **deps:** bump @typescript-eslint/eslint-plugin from 4.2.0 to 4.4.0 ([#782](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/782)) ([908bc4a](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/908bc4add9728db937829f8f1198f57eda6c5fd6))
- **import:** use core rule instead of plugin rule ([#786](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/786)) ([0d6546d](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/0d6546dbaae539effe2b0f9e55bc968399a5e238))

## [12.0.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v11.2.1...v12.0.0) (2020-09-27)

### ⚠ BREAKING CHANGES

- **prettier:** Use the `prettier --check` command instead of `eslint-plugin-prettier`.
  See also <https://github.com/prettier/prettier/issues/7828> for the reasons of this removal.

### Features

- **deps:** bump @typescript-eslint/eslint-plugin from 4.1.1 to 4.2.0 ([#766](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/766)) ([0062ff7](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/0062ff7816e7ceb8efd85f5cba17c5a1e139b507))
- **prettier:** remove `eslint-plugin-prettier` ([#772](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/772)) ([d5386cc](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/d5386cc73fd1b7cf89746c8f110cb9a3a9549236))

### [11.2.1](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v11.2.0...v11.2.1) (2020-09-08)

### Bug Fixes

- **deps:** bump the minimum version of `eslint` ([#753](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/753)) ([6e6a83c](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/6e6a83c67d7b91adb5bcef42a7d27458b11486f1))
- **typescript:** turn off `no-use-before-define` explicitly ([#752](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/752)) ([c70a2c2](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/c70a2c2a18b95e0f22cdb0b069c237586a56a713))

## [11.2.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v11.1.0...v11.2.0) (2020-09-08)

### Features

- **typescript:** bump typescript-eslint from 3.9.0 to 4.1.0 ([#751](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/751)) ([461dd34](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/461dd34963be8898a0d0747dca8af277a0c5d98b))

## [11.1.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v11.0.0...v11.1.0) (2020-08-08)

### Features

- **deps:** bump @typescript-eslint/eslint-plugin from 3.7.1 to 3.8.0 ([#721](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/721)) ([2991615](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/29916151d093e6a882228a9e82aa4f9f02b0250e))

### Bug Fixes

- **deps:** bump eslint from 7.4.0 to 7.5.0 (remove `id-blacklist`) ([#706](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/706)) ([5acd469](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/5acd469e19da4f1a59c4cc52752fb71e7731723e))

## [11.0.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v10.11.0...v11.0.0) (2020-07-14)

### ⚠ BREAKING CHANGES

- **deps:** the minimum required peer dependencies are bumped.
- **core:** The `no-restricted-globals` rule will warn fewer global variables.

### Features

- **core:** remove `eslint-restricted-globals` package ([#694](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/694)) ([fd17971](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/fd1797138464278ef6a9f61b8e1ba7d6395fc831))
- **deps:** bump @typescript-eslint/eslint-plugin from 2.31.0 to 2.33.0 ([#655](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/655)) ([881e84f](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/881e84fbe915dff8938133fc7624040748b60eb7))
- **deps:** bump eslint to v7 ([#695](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/695)) ([cbf04f0](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/cbf04f09909b17cea4f2017ace7a817c23397ccf))
- **node:** disable all Node-specific rules ([#645](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/645)) ([795de66](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/795de6615561b47209c07626cb8351112a6392ce))

### Bug Fixes

- **import:** fix invalid usage of `plugin:import/{react,typescript}` ([#680](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/680)) ([40e7667](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/40e7667c6fbc2ccd3729590e0d8e4e94e86adea4))
- **node:** remove core Node.js rules ([#678](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/678)) ([920e80b](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/920e80b9dffaec838911c20d6b2874e51893f1d3))
- **prettier:** remove `prettier` from peer-deps ([#686](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/686)) ([f35e155](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/f35e155ae10437294ff78b8ba945f173a4c520ba))
- **typescript:** remove `typescript` from peer-deps ([#685](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/685)) ([6214d93](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/6214d939ba49afd81fbdbf5bc609ca61907abb68))

## [10.11.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v10.10.1...v10.11.0) (2020-05-07)

### Features

- **deps:** bump @typescript-eslint/eslint-plugin from 2.28.0 to 2.31.0 ([#639](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/639)) ([849c773](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/849c77350368ddbe3f5f5b1ac4710dd4f9e49cee))
- **deps:** bump eslint-plugin-react-hooks from 3.0.0 to 4.0.0 ([#637](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/637)) ([f99ce2c](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/f99ce2c80ec0fd15cf8060885c15f6c045ee1242))
- **typescript:** enable rules requiring type info ([#640](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/640)) ([ae57e07](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/ae57e0784e011792d51e1b1404a3049c51822aa0))

### [10.10.1](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v10.10.0...v10.10.1) (2020-04-14)

### Bug Fixes

- **deps:** allow prettier v2 ([#625](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/625)) ([f8ac8cf](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/f8ac8cf3a59cdfaf90a2a150dfd3641dab12ede6))
- **deps:** bump @typescript-eslint/eslint-plugin from 2.27.0 to 2.28.0 ([#621](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/621)) ([ca39733](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/ca39733db0842a200cbd92b484ec1a87b6033a03))

## [10.10.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v10.9.1...v10.10.0) (2020-04-13)

### Features

- **deps:** bump @typescript-eslint/eslint-plugin from 2.26.0 to 2.27.0 ([#615](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/615)) ([ca10615](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/ca10615f6a8f1697e4de47943da85bccacc2b6b9))
- **deps:** bump eslint-plugin-node from 11.0.0 to 11.1.0 ([#610](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/610)) ([41cea9a](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/41cea9aea4937dc3141e04e98d18c8bb5573de6b))
- **deps:** bump eslint-plugin-react-hooks from 2.5.1 to 3.0.0 ([#609](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/609)) ([907a0ca](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/907a0ca265a5b9ee8f95456fc4727e6ca148810e))

### [10.9.1](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v10.9.0...v10.9.1) (2020-03-24)

### Bug Fixes

- **deps:** bump @typescript-eslint/eslint-plugin from 2.22.0 to 2.23.0 ([#601](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/601)) ([e1b0f23](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/e1b0f23e98d66b2a71db21c4efc71bd549a17e15))
- **deps:** bump @typescript-eslint/eslint-plugin from 2.24.0 to 2.25.0 ([#608](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/608)) ([595e2a7](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/595e2a76dcedbc9d31081b7bd450f0b2e275c5f0))

## [10.9.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v10.8.0...v10.9.0) (2020-03-03)

### Features

- **deps:** bump @typescript-eslint/eslint-plugin from 2.21.0 to 2.22.0 ([#596](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/596)) ([64d7437](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/64d7437009203a13f375a0daba688303648da3e8))

## [10.8.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v10.7.0...v10.8.0) (2020-02-07)

### Features

- **deps:** bump @typescript-eslint/eslint-plugin from 2.18.0 to 2.19.0 ([#581](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/581)) ([7ea433f](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/7ea433fa6364b24d082dc3401d651f37fa962499))
- **typescript:** remove deprecated `no-untyped-public-signature` ([#582](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/582)) ([6f88469](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/6f884695fae1abcc974b95e8e996f04066f10549)), closes [typescript-eslint/typescript-eslint#1020](https://github.com/typescript-eslint/typescript-eslint/issues/1020)

## [10.7.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v10.6.0...v10.7.0) (2020-01-28)

### Features

- **deps:** bump @typescript-eslint/eslint-plugin from 2.17.0 to 2.18.0 ([#572](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/572)) ([6e8da47](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/6e8da47b8e213d7efb9a1a7185603c3417ae7059))

## [10.6.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v10.5.0...v10.6.0) (2020-01-22)

### Features

- **deps:** bump @typescript-eslint/eslint-plugin from 2.16.0 to 2.17.0 ([#563](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/563)) ([7f275ab](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/7f275ab))

## [10.5.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v10.4.0...v10.5.0) (2020-01-17)

### Features

- **core:** set `argsIgnorePattern` to `no-unused-vars` ([#559](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/559)) ([f267d07](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/f267d07))
- **deps:** bump @typescript-eslint/eslint-plugin from 2.13.0 to 2.15.0 ([#552](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/552)) ([2d931a4](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/2d931a4))
- **deps:** bump @typescript-eslint/eslint-plugin from 2.15.0 to… ([#557](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/557)) ([c4e8454](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/c4e8454))
- **deps:** bump eslint-plugin-node from 10.0.0 to 11.0.0 ([#547](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/547)) ([343a293](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/343a293))
- **deps:** bump eslint-plugin-react from 7.17.0 to 7.18.0 ([#560](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/560)) ([bf37bed](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/bf37bed))

## [10.4.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v10.3.0...v10.4.0) (2019-12-26)

### Features

- **deps:** bump @typescript-eslint/eslint-plugin from 2.12.0 to 2.13.0 ([#541](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/541)) ([4e9444a](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/4e9444a))
- **deps:** bump eslint-plugin-react from 7.16.0 to 7.17.0 ([#523](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/523)) ([6681ba6](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/6681ba6))
- turn off `no-extra-semi` rule ([#545](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/545)) ([b386d8a](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/b386d8a)), closes [/github.com/prettier/eslint-config-prettier/blob/4fdaa044ca252f2f6360dba9d6ef1e43bf03b59a/index.js#L52](https://github.com/ybiquitous//github.com/prettier/eslint-config-prettier/blob/4fdaa044ca252f2f6360dba9d6ef1e43bf03b59a/index.js/issues/L52) [40typescript-eslint.js#L12](https://github.com/ybiquitous/40typescript-eslint.js/issues/L12)

## [10.3.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v10.2.0...v10.3.0) (2019-11-26)

### Features

- **deps:** bump @typescript-eslint/eslint-plugin to 2.9.0 ([#521](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/521)) ([5f7e583](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/5f7e583))
- **deps:** bump eslint from 6.6.0 to 6.7.0 ([#516](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/516)) ([562d99b](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/562d99b))
- **deps:** introduce `peerDependenciesMeta` ([#517](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/517)) ([9807bae](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/9807bae))
- remove deprecated rules ([#522](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/522)) ([7b9cc9d](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/7b9cc9d))

## [10.2.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v10.1.0...v10.2.0) (2019-11-20)

### Features

- **deps:** bump @typescript-eslint/eslint-plugin from 2.7.0 to 2.8.0 ([#513](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/513)) ([c94496c](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/c94496c))

## [10.1.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v10.0.0...v10.1.0) (2019-11-12)

### Features

- **typescript:** add `no-unused-expressions` rule ([#507](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/507)) ([b087b21](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/b087b21))

## [10.0.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v9.0.0...v10.0.0) (2019-10-18)

### ⚠ BREAKING CHANGES

- **deps:** requires ESLint minimum version 6.4.0

### Features

- **deps:** bump eslint from 6.3.0 to 6.4.0 ([#466](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/466)) ([38b1d68](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/38b1d68))
- **deps:** bump eslint-plugin-react from 7.14.3 to 7.15.1 ([#479](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/479)) ([1f18537](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/1f18537))

## [9.0.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v8.2.0...v9.0.0) (2019-09-13)

### ⚠ BREAKING CHANGES

- **import:** The special support for `.json` and `.mjs` has been dropped.

### Features

- **core:** disable `no-undefined` ([#457](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/457)) ([d25cd2c](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/d25cd2c))
- **core:** loosen rule `func-style` ([#456](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/456)) ([2c15911](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/2c15911))
- **core:** loosen rule `prefer-destructuring` ([#455](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/455)) ([b6b060f](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/b6b060f))
- **import:** support TypeScript files ([#459](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/459)) ([9268f4c](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/9268f4c))
- **typescript:** change settings of `explicit-function-return-type` ([#458](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/458)) ([1a56123](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/1a56123))

## [8.2.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v8.1.0...v8.2.0) (2019-09-09)

### Features

- **deps:** bump eslint-plugin-node from 9.2.0 to 10.0.0 ([#450](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/450)) ([42c3975](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/42c3975))

## [8.1.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v8.0.0...v8.1.0) (2019-08-22)

### Features

- **deps:** bump eslint-plugin-react-hooks from 1.7.0 to 2.0.1 ([#439](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/439)) ([019ac25](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/019ac25))

## [8.0.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v7.3.0...v8.0.0) (2019-08-20)

### Bug Fixes

- **react:** add missing `.tsx` extension for JSX ([#363](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/363)) ([3ba9ae9](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/3ba9ae9))

### Features

- **deps:** bump eslint-plugin-compat from 2.7.0 to 3.0.1 ([#365](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/365)) ([6aaf415](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/6aaf415))
- **deps:** bump eslint-plugin-import from 2.16.0 to 2.17.2 ([#382](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/382)) ([9db61e3](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/9db61e3))
- **deps:** bump eslint-plugin-node from 8.0.1 to 9.0.1 ([#385](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/385)) ([5bd7ca9](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/5bd7ca9))
- **deps:** bump eslint-plugin-react from 7.12.4 to 7.13.0 ([#386](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/386)) ([daf4633](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/daf4633))
- **deps:** bump prettier from 1.16.4 to 1.17.0 ([#379](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/379)) ([7fa5f86](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/7fa5f86))
- **deps:** update to ESLint 6 ([#434](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/434)) ([f70e045](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/f70e045))
- **react:** add `eslint-plugin-react-hooks` ([#407](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/407)) ([ad0fc25](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/ad0fc25))
- **react:** disable too strict `jsx-no-literals` rule ([#364](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/364)) ([fd38ce8](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/fd38ce8))
- **typescript:** list all TypeScript rules ([#435](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/435)) ([3246efc](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/3246efc))
- **typescript:** update @typescript-eslint/eslint-plugin to v2 ([#431](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/431)) ([642be88](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/642be88))

### Tests

- improve E2E test ([#412](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/412)) ([8a1ad29](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/8a1ad29))

### BREAKING CHANGES

- **deps:** requires ESLint minimum version 6.2.0
- **deps:** require minimum Node version `>=10`

<a name="7.3.0"></a>

# [7.3.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v7.2.0...v7.3.0) (2019-03-10)

### Features

- **deps:** update dependency eslint to v5.15.1 ([#361](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/361)) ([b0a1fde](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/b0a1fde))
- **react:** disable `jsx-boolean-value` rule ([#362](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/362)) ([144d554](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/144d554))

<a name="7.2.0"></a>

# [7.2.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v7.1.0...v7.2.0) (2019-02-04)

### Bug Fixes

- **deps:** update dependency eslint-config-prettier to v4 ([#321](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/321)) ([519f887](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/519f887))
- **deps:** update peer-deps versions ([#336](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/336)) ([4b9e5b2](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/4b9e5b2))

### Features

- support TypeScript ([#338](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/338)) ([898ff8a](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/898ff8a))

<a name="7.1.0"></a>

# [7.1.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v7.0.0...v7.1.0) (2019-01-06)

### Features

- update React JSX rules ([#317](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/317)) ([68e2fd9](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/68e2fd9))

<a name="7.0.0"></a>

# [7.0.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v6.2.0...v7.0.0) (2018-12-25)

### Bug Fixes

- **deps:** update dependency eslint-plugin-node to v8 ([#293](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/293)) ([7e0a561](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/7e0a561))
- **deps:** update dependency eslint-restricted-globals to ^0.2.0 ([#295](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/295)) ([78ca5a0](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/78ca5a0))

### Features

- **deps:** update ESLint to v5.11.0 and add a rule `no-useless-catch` ([#312](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/312)) ([5966724](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/5966724))

### BREAKING CHANGES

- **deps:** requires ESLint minimum version 5.11.0

<a name="6.2.0"></a>

# [6.2.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v6.1.0...v6.2.0) (2018-10-01)

### Bug Fixes

- **deps:** update dependency eslint-config-prettier to v3 ([#268](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/268)) ([e7c0615](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/e7c0615))
- **deps:** update dependency eslint-plugin-prettier to v3 ([#284](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/284)) ([18eac49](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/18eac49))

### Features

- remove some customized JSX rules ([#287](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/287)) ([86d2b6d](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/86d2b6d))

<a name="6.1.0"></a>

# [6.1.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v6.0.0...v6.1.0) (2018-08-07)

### Features

- add new rules since ESLint 5.3.0 ([#261](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/261)) ([f6ad84f](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/f6ad84f))
- more restrict versions of `peerDependencies` ([#262](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/262)) ([128abbb](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/128abbb))

<a name="6.0.0"></a>

# [6.0.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v5.1.0...v6.0.0) (2018-07-17)

### Features

- **deps:** update dependency eslint-plugin-node to v7 ([#253](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/253)) ([f9148a8](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/f9148a8))

### BREAKING CHANGES

- **deps:** update to `eslint@5` as peer dependency, and update `ecmaVersion` to `2019`

<a name="5.1.0"></a>

# [5.1.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v5.0.1...v5.1.0) (2018-06-26)

### Bug Fixes

- **deps:** update dependency eslint-plugin-eslint-comments to v3 ([#233](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/233)) ([af75000](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/af75000))

### Features

- **deps:** update dependency eslint to v5 ([#232](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/232)) ([7b49eac](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/7b49eac))

<a name="5.0.1"></a>

## [5.0.1](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v5.0.0...v5.0.1) (2018-06-17)

### Bug Fixes

- **node:** set `ecmaVersion: 2018` forcibly ([#230](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/230)) ([8ee3e8e](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/8ee3e8e))

<a name="5.0.0"></a>

# [5.0.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v4.2.2...v5.0.0) (2018-06-17)

### Features

- **prettier:** follow Prettier default settings as possible ([#203](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/203)) ([09d2590](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/09d2590))
- drop `eslint-config-airbnb` ([#227](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/227)) ([47a0d25](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/47a0d25))
- drop Node 6 support ([#226](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/226)) ([78220d9](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/78220d9))

### BREAKING CHANGES

- Re-arrange all rules without Airbnb's settings
- Now minimum support version is Node 8

<a name="4.2.2"></a>

## [4.2.2](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v4.2.1...v4.2.2) (2018-02-08)

### Bug Fixes

- **deps:** update dependency eslint-plugin-node to ^6.0.0 ([#157](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/157)) ([704ac4c](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/704ac4c))

<a name="4.2.1"></a>

## [4.2.1](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v4.2.0...v4.2.1) (2017-12-19)

### Bug Fixes

- change `trailingComma` to `es5` following minimum Node version ([#137](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/137)) ([bf85cba](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/bf85cba))

<a name="4.2.0"></a>

# [4.2.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v4.1.0...v4.2.0) (2017-12-19)

### Features

- new option `ybiquitous/node` for Node.js environment ([#136](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/136)) ([d929f5c](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/d929f5c))

<a name="4.1.0"></a>

# [4.1.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v4.0.0...v4.1.0) (2017-12-18)

### Features

- more rough versions of peer dependencies ([#133](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/133)) ([a804aa7](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/a804aa7))

<a name="4.0.0"></a>

# [4.0.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v3.0.1...v4.0.0) (2017-12-05)

### Features

- integrate with Prettier ([#125](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/125)) ([54bd8e8](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/54bd8e8))
- use `plugin:eslint-comments/recommended` configuration ([#126](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/126)) ([1ea089a](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/1ea089a))

### BREAKING CHANGES

- Although keeping the lint rules as far as possible, this integration may change your code style a lot.
  And installing `prettier` (peer dependency) becomes necessary.

<a name="3.0.1"></a>

## [3.0.1](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v3.0.0...v3.0.1) (2017-10-30)

### Bug Fixes

- **package:** update `eslint-plugin-comments` to `^2.0.1` ([#110](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/110)) ([7ecb73c](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/7ecb73c))

<a name="3.0.0"></a>

# [3.0.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v2.1.0...v3.0.0) (2017-10-07)

### Features

- **package:** update `eslint-config-airbnb` to `^16.0.0` ([#97](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/97)) ([807c843](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/807c843))
- **package:** update `eslint-plugin-compat` from `^1.0.2` to `^2.0.1` ([#95](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/95)) ([4b24c63](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/4b24c63))

### BREAKING CHANGES

- **package:** major update of `eslint-config-airbnb`

<a name="2.1.0"></a>

# [2.1.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v2.0.2...v2.1.0) (2017-09-24)

### Features

- delete verbose message on install ([5faa7a3](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/5faa7a3))

<a name="2.0.2"></a>

## [2.0.2](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v2.0.1...v2.0.2) (2017-08-20)

<a name="2.0.1"></a>

## [2.0.1](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v2.0.0...v2.0.1) (2017-07-28)

<a name="2.0.0"></a>

# [2.0.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v1.6.0...v2.0.0) (2017-07-28)

### Features

- upgrade to ESLint v4 ([#64](https://github.com/ybiquitous/eslint-config-ybiquitous/issues/64)) ([cb9bc5b](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/cb9bc5b))

### BREAKING CHANGES

- ESLint v4 may not support older plugins

<a name="1.6.0"></a>

# [1.6.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v1.5.2...v1.6.0) (2017-07-13)

### Features

- new entry point `ybiquitous/base` ([a782676](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/a782676))

<a name="1.5.2"></a>

## [1.5.2](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v1.5.1...v1.5.2) (2017-07-12)

### Bug Fixes

- glob pattern according to `lint-staged` README ([3059355](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/3059355))

<a name="1.5.1"></a>

## [1.5.1](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v1.5.0...v1.5.1) (2017-06-25)

### Bug Fixes

- disable `eslint-comments/no-use` rule (unintentionally enabled) ([9cd10c8](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/9cd10c8))

<a name="1.5.0"></a>

# [1.5.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v1.4.4...v1.5.0) (2017-06-25)

### Features

- add `eslint-plugin-eslint-comments` ([7bd4768](https://github.com/ybiquitous/eslint-config-ybiquitous/commit/7bd4768))

<a name="1.4.4"></a>

## [1.4.4](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v1.4.3...v1.4.4) (2017-06-15)

- Introduce `standard-version`

<a name="1.4.3"></a>

## [1.4.3](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v1.4.2...v1.4.3) (2017-06-12)

- Improve postinstall message
- Improve README

<a name="1.4.2"></a>

## [1.4.2](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v1.4.1...v1.4.2) (2017-06-12)

- Restrict to ESLint v3 (ESLint v4 is not yet supported)

<a name="1.4.1"></a>

## [1.4.1](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v1.4.0...v1.4.1) (2017-06-10)

- Support Node.js v8

<a name="1.4.0"></a>

## [1.4.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v1.3.0...v1.4.0) (2017-05-15)

- Upgrade eslint-config-airbnb to version 15.0.0

<a name="1.3.0"></a>

## [1.3.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v1.2.0...v1.3.0) (2017-05-05)

- New ESLint plugin: `eslint-plugin-compat`

- Update postinstall example: `pre-commit` => `husky`

<a name="1.2.0"></a>

## [1.2.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v1.1.0...v1.2.0) (2017-02-26)

- Update eslint-plugin-jsx-a11y to version 4.0.0

<a name="1.1.0"></a>

## [1.1.0](https://github.com/ybiquitous/eslint-config-ybiquitous/compare/v1.0.2...v1.1.0) (2017-01-12)

- Update eslint-config-airbnb to version 14.0.0

- Add CHANGELOG

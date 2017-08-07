#!/bin/sh
set -eu

WORKDIR=tmp

# setup
tarball=$(npm pack)
rm -rf $WORKDIR
mkdir $WORKDIR
cd $WORKDIR
mv "../${tarball}" .
npm init -y
export PATH="$(npm bin):${PATH}"
NPM_OPTS='--no-progress --save-dev --prefer-offline'

# test local
npm install $NPM_OPTS eslint "file:./${tarball}"
echo 'process.stdout.write(1)' > test.js
echo '{"extends":"ybiquitous/base"}' > .eslintrc && eslint .
echo '{"extends":"ybiquitous"}' > .eslintrc && eslint .

# test remote
npm install $NPM_OPTS "github:ybiquitous/eslint-config-ybiquitous"
eslint .

# teardown
cd ..
rm -rf $WORKDIR

#!/bin/sh
set -e

WORKDIR=tmp

# setup
tarball=$(npm pack)
rm -rf $WORKDIR
mkdir $WORKDIR
cd $WORKDIR
mv "../${tarball}" .
npm init -y
export PATH="$(npm bin):${PATH}"
NPM_OPTS='--no-progress --save-dev --cache-min 99999999'

# test local
npm install $NPM_OPTS eslint@3 "file:./${tarball}"
echo '{"extends":"ybiquitous"}' > .eslintrc
echo 'process.stdout.write(1)' > test.js
eslint .

# test remote
npm install $NPM_OPTS "github:ybiquitous/eslint-config-ybiquitous"
eslint .

# teardown
cd ..
rm -rf $WORKDIR

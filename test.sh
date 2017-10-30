#!/bin/sh
set -eu

workdir=tmp

# setup
tarball=$(npm pack)
rm -rf $workdir
mkdir $workdir
cd $workdir
mv "../${tarball}" .
npm init -y
export PATH="$(npm bin):${PATH}"
npm_opts='--no-progress --save-dev'

# test local
npm install $npm_opts eslint "file:./${tarball}"
echo 'process.stdout.write(1)' > test.js
echo '{"extends":"ybiquitous/base"}' > .eslintrc && eslint .
echo '{"extends":"ybiquitous"}' > .eslintrc && eslint .

# test remote
npm install $npm_opts "github:ybiquitous/eslint-config-ybiquitous"
eslint .

# teardown
cd ..
rm -rf $workdir

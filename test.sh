#!/bin/sh
set -e

WORKDIR=tmp

# setup
rm -rf $WORKDIR
mkdir $WORKDIR
cd $WORKDIR
npm init -y

# test local
npm install --save-dev eslint ..
echo '{"extends":"ybiquitous"}' > .eslintrc
echo 'process.stdout.write(1)' > test.js
$(npm bin)/eslint .

# test remote
npm install --save-dev --cache-min 99999999 \
    github:ybiquitous/eslint-config-ybiquitous
$(npm bin)/eslint .

# teardown
cd ..
rm -rf $WORKDIR

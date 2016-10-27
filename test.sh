#!/bin/sh
set -e

rm -rf tmp
mkdir tmp
cd tmp
npm init -y
npm install --cache-min 99999999 ..
echo '{"extends":"ybiquitous"}' > .eslintrc
echo 'process.stdout.write(1)' | $(npm bin)/eslint --stdin
cd ..
rm -rf tmp

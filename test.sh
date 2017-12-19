#!/bin/sh
set -eu

workdir=tmp

run () {
  # setup
  tarball=$(npm pack)
  rm -rf $workdir
  mkdir $workdir
  cd $workdir
  mv "../${tarball}" .
  npm init -y
  PATH="$(npm bin):${PATH}"
  export PATH
  npm_opts='--no-progress --save-dev'

  # test local
  npm install "$npm_opts" eslint prettier "file:./${tarball}"
  echo 'process.stdout.write(1)' > test.js
  echo '{"extends":"ybiquitous/base"}' > .eslintrc && eslint .
  echo '{"extends":"ybiquitous"}' > .eslintrc && eslint .

  # test remote
  npm install "$npm_opts" "github:ybiquitous/eslint-config-ybiquitous"
  eslint .
}

# teardown
(run; rm -rf $workdir)

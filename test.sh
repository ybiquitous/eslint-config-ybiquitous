#!/bin/sh
set -eu

workdir=tmp

run () {
  # setup
  tarball=$(npm pack)
  rm -rf $workdir
  mkdir $workdir
  cd $workdir
  cat <<EOF >.npmrc
progress=false
loglevel=warn
EOF
  mv "../${tarball}" .
  npm init -y >/dev/null
  PATH="$(npm bin):${PATH}"
  export PATH

  # test local
  npm install eslint prettier "file:./${tarball}" >/dev/null
  echo 'process.stdout.write(1)' > test.js
  echo '{"extends":"ybiquitous/base"}' > .eslintrc && eslint .
  echo '{"extends":"ybiquitous"}' > .eslintrc && eslint .
  for file in node_modules/eslint-config-ybiquitous/*.js; do
    eslint --print-config "$file" >/dev/null
    echo "test: eslint --print-config ${file} ... ok"
  done

  # test remote
  npm install "github:ybiquitous/eslint-config-ybiquitous" >/dev/null
  eslint .
}

# teardown
(run; rm -rf $workdir)

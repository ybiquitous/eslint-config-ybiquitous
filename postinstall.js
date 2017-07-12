const examples = [
  {
    scripts: {
      precommit: 'lint-staged',
    },
    'lint-staged': {
      '*.{js,jsx}': 'eslint --max-warnings=0',
    },
  },
  {
    scripts: {
      precommit: 'lint-staged',
    },
    'lint-staged': {
      '*.{js,jsx}': [
        'eslint --fix --max-warnings=0',
        'git add',
      ],
    },
  },
]

const exampleMessage = examples
  .map(example => JSON.stringify(example, null, 2))
  .map(example => example.replace(/^/gm, '    '))
  .join(`

    -------------------- OR --------------------

`)

process.stdout.write(`
1. Install lint-staged and husky:

    $ npm install --save-dev lint-staged husky

2. Add this settings to package.json:

${exampleMessage}

`)

const { EOL } = require('os')

const examples = [
  {
    scripts: {
      precommit: 'lint-staged',
    },
    'lint-staged': {
      '*.@(js|jsx)': 'eslint --max-warnings=0',
    },
  },
  {
    scripts: {
      precommit: 'lint-staged',
    },
    'lint-staged': {
      '*.@(js|jsx)': [
        'eslint --fix --max-warnings=0',
        'git add',
      ],
    },
  },
]

const exampleMessage = examples
  .map(example => JSON.stringify(example, null, 2))
  .join(`${EOL}${EOL}-------------------- OR --------------------${EOL}${EOL}`)

process.stdout.write(`
1. Install lint-staged and husky:

> npm install --D lint-staged husky


2. Add this settings to package.json:

${exampleMessage}
`)

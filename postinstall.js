process.stdout.write(`
Please add this settings to package.json:

  {
    "lint-staged": {
      "*.@(js|jsx)": "eslint"
    },
    "pre-commit": [
      "lint-staged"
    ]
  }

-------------------- Or --------------------

  {
    "lint-staged": {
      "*.@(js|jsx)": [
        "eslint --fix",
        "git add"
      ]
    },
    "pre-commit": [
      "lint-staged"
    ]
  }

`)

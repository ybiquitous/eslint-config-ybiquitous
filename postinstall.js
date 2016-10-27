process.stdout.write(`
Please add this settings to package.json:

  {
    "lint-staged": {
      "*.@(js|jsx)": "eslint --max-warnings=0"
    },
    "pre-commit": [
      "lint-staged"
    ]
  }

-------------------- Or --------------------

  {
    "lint-staged": {
      "*.@(js|jsx)": [
        "eslint --fix --max-warnings=0",
        "git add"
      ]
    },
    "pre-commit": [
      "lint-staged"
    ]
  }

`)

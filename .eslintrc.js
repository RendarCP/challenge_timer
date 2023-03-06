module.exports = {
  extends: ['airbnb', 'prettier/react', 'plugin:prettier/recommended'],
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'prettier/prettier': ['error', { singleQuote: true }],
    'no-trailing-spaces': 0,
    'keyword-spacing': 0,
    'no-unused-vars': 1,
    'no-multiple-empty-lines': 0,
    'space-before-function-paren': 0,
    'eol-last': 0,
    'no-var': 'error'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
};
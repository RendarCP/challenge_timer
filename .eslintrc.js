module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'airbnb',
    // 'airbnb/hooks',
    // 'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    "react/no-unknown-property": ["error", { "ignore": ["css"] }],
    // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
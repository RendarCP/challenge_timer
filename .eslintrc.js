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
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.js', 'tsconfig'],
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
    // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    "react/no-unknown-property": ["error", { "ignore": ["css"] }],
        'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
        pathGroups: [
          {
            "pattern": "../components/*",
            "group": "builtin",
            "position": "after"
          },
          {
            "pattern": "../hooks/*",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "../api/*",
            "group": "internal",
            "position": "after"
          }
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
        'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
  },
};
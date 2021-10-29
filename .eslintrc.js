module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb', 'airbnb/hooks',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-underscore-dangle': ['error', {
      allowAfterThis: true,
      allowAfterSuper: true,
    }],

    'lines-between-class-members': [
      'error', 'always', {exceptAfterSingleLine: true},
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};

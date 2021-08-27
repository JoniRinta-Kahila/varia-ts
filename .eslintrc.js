module.exports = {
  env: {
    // browser: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      1,
      {
        trailingComma: 'es5',
        singleQuote: true,
        semi: true,
      },
    ],
    'no-console': 0,
  },
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js', '.ts'],
  //       paths: ['./src'],
  //     },
  //   },
  // },
};

// TODO: remove me once this is fixed: https://github.com/typescript-eslint/typescript-eslint/issues/752
module.exports = {
  extends: [
    '../../.eslintrc.js'
  ],
  parserOptions: {
    project: undefined,
    tsconfigRootDir: undefined
  },
  rules: {
    '@typescript-eslint/prefer-readonly': undefined,
    '@typescript-eslint/strict-boolean-expressions': undefined
  }
};

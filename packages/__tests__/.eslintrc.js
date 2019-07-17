module.exports = {
  extends: [
    '../../.eslintrc.js',
    'plugin:cypress/recommended',
    'plugin:mocha/recommended'
  ],
  parserOptions: {
    // Switched of for performance reasons.
    // Generating type information makes linting this packages take almost a minute,
    // with low benefits as its only test code.
    project: undefined,
    tsconfigRootDir: undefined
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  plugins: [
    'mocha'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'mocha/no-hooks-for-single-case': 'off', // Disabled to avoid duplicates, because 'no-hooks' is enabled
    'sonarjs/cognitive-complexity': 'off',
    'no-console': 'off',

    // We need to unset rules that need type information. See above for rationale.
    '@typescript-eslint/prefer-readonly': undefined,
    '@typescript-eslint/strict-boolean-expressions': undefined,

    // Things we need to fix some day, so are marked as warnings for now:
    'mocha/no-hooks': 'warn',
    'mocha/no-identical-title': 'warn',
    'mocha/no-mocha-arrows': 'warn',

    // Things we still need to decide on:
    'mocha/max-top-level-suites': 'warn',
    'mocha/no-setup-in-describe': 'warn'
  }
};

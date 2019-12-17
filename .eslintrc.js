module.exports = {
  extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
  env: {
    // For more environments, see here: http://eslint.org/docs/user-guide/configuring.html#specifying-environments
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  rules: {
    // Insert custom rules here
    // For more rules, see here: http://eslint.org/docs/rules/
    'no-console': 0,
    'no-debugger': 'warn',
    'no-var': 'warn',
    'require-jsdoc': 'off',
    'prettier/prettier': 'error'
  },
  parserOptions: {
    sourceType: 'module'
  }
}

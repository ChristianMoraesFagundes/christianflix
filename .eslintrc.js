module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "eslint-disable linebreak-style",
    "react/prop-types": [1, { ignore: 0, customValidators: 0, skipUndeclared: true }],
    //"react/jsx-indent": [enable, 'tab'|1, {checkAttributes: false, indentLogicalExpressions: false}]
  },
};

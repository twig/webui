module.exports = {
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      "impliedStrict ": true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  ignorePatterns: ["node_modules/", "flotr.js", "mootools.js"],
  rules: {
    // eqeqeq: ["error", "always"],
    'no-debugger': 1, // warn

    // disable for now
    "no-unused-vars": ['warn', {args: 'none'}],
    "no-redeclare": 0,
  }
};

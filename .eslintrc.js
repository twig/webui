module.exports = {
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      "impliedStrict ": true
    }
  },
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ["node_modules/", "flotr.js", "mootools.js"],
  rules: {
    // eqeqeq: ["error", "always"],
    'no-debugger': 1, // warn

    // disable for now
    "no-unused-vars": 0, // ['error', {args: 'none'}],
    "no-redeclare": 0,
  }
};

module.exports = {
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 5,
    sourceType: "script",
    ecmaFeatures: {
      "impliedStrict ": true
    }
  },
  env: {
    browser: true
  },
  ignorePatterns: ["node_modules/", "flotr.js", "mootools.js"],
  rules: {
    // eqeqeq: ["error", "always"],

    // disable for now
    "no-undef": 0,
    "no-unused-vars": 0,
    "no-redeclare": 0,
    "no-extra-boolean-cast": 0,
    "no-useless-escape": 0,
    "no-prototype-builtins": 0,
  }
};

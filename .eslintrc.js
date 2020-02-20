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
    eqeqeq: ["error", "always"],

    // disable for now
    "no-undef": 0,
    "no-unused-vars": 0,
    "no-mixed-spaces-and-tabs": 0,
    "no-redeclare": 0,
    "no-dupe-keys": 0,
    "no-empty": 0,
    "no-extra-boolean-cast": 0,
    "no-unreachable": 0,
    "no-fallthrough": 0,
    "no-useless-escape": 0
  }
};

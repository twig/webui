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
  rules: {}
};

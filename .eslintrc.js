/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "no-console": 1, // Means warning
    "prettier/prettier": 2, // Means error
  },
};

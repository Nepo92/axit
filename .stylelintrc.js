module.exports = {
  extends: ["stylelint-config-airbnb",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended"],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "indentation": 2,
    "max-nesting-depth": null,
    "number-leading-zero": null,
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["include", "mixin"],
    }],
  }
};

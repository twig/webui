module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-sass-guidelines"],
  rules: {
    // match prettier
    "string-quotes": "double",
    "rule-empty-line-before": null,
    "declaration-colon-newline-after": null,
    "declaration-empty-line-before": null,

    // ignore these
    "comment-empty-line-before": null,
    "order/properties-alphabetical-order": null,
    "selector-max-id": null,

    // customise rules
    "selector-no-qualifying-type": [true, { ignore: ["attribute", "class"] }],

    // ignoring for now
    "selector-class-pattern": null,
    "no-descending-specificity": null,
    "shorthand-property-no-redundant-values": null,
    "comment-whitespace-inside": null,
    "selector-max-compound-selectors": null,
    "no-duplicate-selectors": null,
    "selector-pseudo-element-colon-notation": null
  }
};
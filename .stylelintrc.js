module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-sass-guidelines"],
  rules: {
    // match prettier
    "string-quotes": "double",

    // ignore these
    "rule-empty-line-before": null,
    "declaration-colon-newline-after": null,
    "declaration-empty-line-before": null,
    "comment-empty-line-before": null,
    "order/properties-alphabetical-order": null,
    "selector-max-id": null,
    "selector-max-compound-selectors": null,
    "no-descending-specificity": null,
    "shorthand-property-no-redundant-values": null,

    // customise rules
    "selector-no-qualifying-type": [true, { ignore: ["attribute", "class"] }],

    // ignoring for now
    "selector-class-pattern": null,
    "no-duplicate-selectors": null
  }
};

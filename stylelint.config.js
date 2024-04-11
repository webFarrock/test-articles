module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recommended-vue"],
  rules: {
    "custom-property-pattern": null,
    "selector-class-pattern": null,
    "media-query-no-invalid": null,
    "value-keyword-case": [
      "lower",
      {
        ignoreFunctions: ["v-bind"],
      },
    ],
  },
};

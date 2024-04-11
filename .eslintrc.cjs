module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:prettier/recommended",
    "plugin:vue-scoped-css/vue3-recommended",
  ],
  rules: {
    "vue-scoped-css/enforce-style-type": ["error", { allows: ["scoped"] }],
    "vue/multi-word-component-names": "off",
  },
  overrides: [
    {
      files: ["src/components/**/*.vue"],
      rules: {
        "vue/no-multiple-template-root": "off",
      },
    },
  ],
};

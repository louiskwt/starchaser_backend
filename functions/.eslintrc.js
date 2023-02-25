module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    "quote-props": ["error", "as-needed"],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "object-curly-spacing": ["error", "always"],
  },
};

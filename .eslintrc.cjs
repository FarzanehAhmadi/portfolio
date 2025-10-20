module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:jsx-a11y/recommended"],
  plugins: ["jsx-a11y"],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
  },
};

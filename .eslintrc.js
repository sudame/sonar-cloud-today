module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.dev.json",
  },
  iggnorePatterns: ["node_modules/", "public/"],
  rules: {},
};

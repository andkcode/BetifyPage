module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {},
}

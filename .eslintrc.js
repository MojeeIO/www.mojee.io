module.exports = {
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    env: {
        browser: true,
        es6: true,
    },
    extends: ["plugin:gridsome/recommended"],
    rules: {
        "gridsome/format-query-block": "warn",
        "gridsome/require-g-image-src": "error",
        "gridsome/require-g-link-to": "warn",
    },
};

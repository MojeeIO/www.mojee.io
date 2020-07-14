// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-nested"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production"
        ? [purgecss(require("./purgecss.config.js"))]
        : []),
];

module.exports = {
    siteName: "Mojee.io",
    siteDescription: "Lightning fast Emoji library for TypeScript & .NET",
    plugins: [],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
};

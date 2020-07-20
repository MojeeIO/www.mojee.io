// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/styles/mojee.css";
import DefaultLayout from "~/layouts/Default.vue";
import { Highlight } from "./directives/highlight";

export default function (Vue, { router, head, isClient }) {
    // Register directives
    Vue.directive("highlight", Highlight);

    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);

    // Register components exported in /components/index.js globally
    const components = require.context("./components", false, /index.js/);
    components.keys().forEach((filename) => {
        const module = components(filename);

        Object.keys(module).forEach((name) => {
            Vue.component(name, module[name]);
        });
    });

    head.link.push({
        rel: "stylesheet",
        href: "https://use.typekit.net/jrn2kbj.css",
    });
}

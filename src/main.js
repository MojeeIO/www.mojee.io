// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require("~/styles/mojee.css");

import DefaultLayout from "~/layouts/Default.vue";

import MButton from "./components/MButton.vue";

export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);
    Vue.component("MButton", MButton);

    head.link.push({
        rel: "stylesheet",
        href: "https://use.typekit.net/jrn2kbj.css",
    });
}

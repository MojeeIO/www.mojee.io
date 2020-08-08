// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "~/styles/mojee.css";
import PortalVue from "portal-vue";
import DefaultLayout from "~/layouts/Default.vue";
import { Highlight } from "./directives/highlight";

export default function (Vue, { router, head, isClient }) {
    Vue.use(PortalVue);

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

    // Remove "generator" meta tag
    const gIndex = head.meta.findIndex(e => e.name === 'generator')
    if (gIndex !== -1) head.meta.splice(gIndex, 1)

    // Add social media cards
    router.beforeEach((to, _from, next) => {
        head.meta.push({
            key: 'og:url',
            name: 'og:url',
            content: 'https://dev.mojee.io/',
        })

        head.meta.push({
            key: 'twitter:url',
            name: 'twitter:url',
            content: 'https://dev.mojee.io/',
        })
        next()
    })

    head.meta.push({
        key: 'og:title',
        name: 'og:title',
        content: `Lightning fast Emoji library for .NET &amp; TypeScript`,
    })

    head.meta.push({
        key: 'og:description',
        name: 'og:description',
        content: `Lightning fast Emoji library for .NET &amp; TypeScript`,
    })

    head.meta.push({
        key: 'og:image',
        name: 'og:image',
        content: 'https://dev.mojee.io/img/mojee-social-card.png',
    })

    head.meta.push({
        key: 'og:site_name',
        name: 'og:site_name',
        content: 'Mojee',
    })

    head.meta.push({
        key: 'twitter:title',
        name: 'twitter:title',
        content: `Lightning fast Emoji library for .NET &amp; TypeScript`,
    })

    head.meta.push({
        key: 'twitter:description',
        name: 'twitter:description',
        content: `Lightning fast Emoji library for .NET &amp; TypeScript`,
    })

    head.meta.push({
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://dev.mojee.io/img/mojee-social-card.png',
    })

    head.meta.push({
        key: 'twitter:site',
        name: 'twitter:site',
        content: '@mojeeio',
    })
}

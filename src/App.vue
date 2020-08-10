<template>
    <default-layout>
        <router-view />
    </default-layout>
</template>

<static-query>
query {
    metadata {
        siteName
        siteDescription
        siteUrl
    }
}
</static-query>

<script>
import DefaultLayout from "./layouts/Default";

export default {
    metaInfo() {
        return {
            title: this.$static.metadata.siteDescription,

            meta: [
                {
                    key: "description",
                    name: "description",
                    content: this.$static.metadata.siteDescription,
                },
                // Opengraph
                {
                    key: "og:url",
                    name: "og:url",
                    content: this.pageUrl,
                },
                {
                    key: "og:image",
                    name: "og:image",
                    content: `${this.$static.metadata.siteUrl}/img/mojee-social-card.png`,
                },
                {
                    key: "og:site_name",
                    name: "og:site_name",
                    content: this.$static.metadata.siteName,
                },
                // Twitter
                {
                    key: "twitter:url",
                    name: "twitter:url",
                    content: this.pageUrl,
                },
                {
                    key: "twitter:image",
                    name: "twitter:image",
                    content: `${this.$static.metadata.siteUrl}/img/mojee-social-card.png`,
                },
                {
                    key: "twitter:site",
                    name: "twitter:site",
                    content: "@mojeeio",
                },
            ],
        };
    },

    components: {
        DefaultLayout,
    },

    computed: {
        pageUrl() {
            return `${this.$static.metadata.siteUrl}${this.$route.path}`;
        },
    },
};
</script>

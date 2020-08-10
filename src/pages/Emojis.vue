<template>
    <div class="flex max-w-screen-xl mx-auto md:pt-4">
        <emojis-sidebar class="hidden md:block" />

        <m-drawer placement="left" v-model="isFilterSidebarOpen">
            <emojis-sidebar class="mt-8 ml-6" />
        </m-drawer>

        <emojis-content class="xl:pl-10" />
    </div>
</template>

<script>
import EmojisSidebar from "../components/EmojisSidebar";
import EmojisContent from "../components/EmojisContent";
import { store } from "../store";

const title = "Emojis";
const description = "Search emojis";

export default {
    name: "Emojis",

    metaInfo() {
        return {
            title,

            meta: [
                {
                    key: "description",
                    name: "description",
                    content: description,
                },
                {
                    key: "og:title",
                    name: "og:title",
                    content: title,
                },
                {
                    key: "og:description",
                    name: "og:description",
                    content: description,
                },
                {
                    key: "twitter:title",
                    name: "twitter:title",
                    content: title,
                },
                {
                    key: "twitter:description",
                    name: "twitter:description",
                    content: description,
                },
            ],
        };
    },

    components: {
        EmojisSidebar,
        EmojisContent,
    },

    computed: {
        isFilterSidebarOpen: {
            get: () => store.state.isFilterSidebarOpen,
            set: (value) => store.actions.setFilterSidebarState(value),
        },
    },
};
</script>

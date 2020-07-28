<template>
    <Layout>
        <div class="flex max-w-screen-xl pt-5 mx-auto md:pt-10">
            <emojis-sidebar class="hidden md:block" />

            <m-drawer placement="left" v-model="isFilterSidebarOpen">
                <emojis-sidebar class="mt-6 ml-6" />
            </m-drawer>

            <emojis-content class="xl:pl-10" />
        </div>
    </Layout>
</template>

<script>
import EmojisSidebar from "../components/EmojisSidebar";
import EmojisContent from "../components/EmojisContent";
import { store } from "../store";

export default {
    name: "Emojis",

    metaInfo: {
        title: "Emojis",
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

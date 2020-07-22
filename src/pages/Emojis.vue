<template>
    <Layout>
        <div class="flex max-w-screen-xl pt-10 mx-auto">
            <emojis-sidebar class="top-0 w-72" />

            <emojis-content />
        </div>
    </Layout>
</template>

<script>
import EmojisSidebar from "../components/EmojisSidebar";
import EmojisContent from "../components/EmojisContent";

export default {
    name: "Emojis",

    metaInfo: {
        title: "Emojis",
    },

    components: {
        EmojisSidebar,
        EmojisContent,
    },
};
</script>

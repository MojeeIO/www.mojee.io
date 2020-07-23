<template>
    <Layout>
        <div class="flex max-w-screen-xl pt-5 mx-auto md:pt-10">
            <emojis-sidebar />

            <emojis-content class="xl:pl-10" />
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

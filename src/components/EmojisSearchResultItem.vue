<template>
    <div
        ref="result"
        class="relative transition-all duration-100 ease-in transform border border-blue-100 rounded-sm cursor-pointer md:rounded-md pb-full hover:scale-110"
        @click="onSelectEmoji"
    >
        <m-emoji
            :emoji="emoji"
            class="absolute inset-0 flex items-center justify-center"
        />
    </div>
</template>

<script>
import { store } from "../store";
import tippy from "tippy.js";

export default {
    name: "EmojiSearchResultItem",

    props: {
        emoji: Object,
    },

    methods: {
        onSelectEmoji() {
            store.actions.setSelectedEmoji(this.emoji);
            store.actions.setEmojiDrawerState(true);
        },
    },

    mounted() {
        tippy(this.$refs.result, {
            content: `:${this.emoji.shortcode}:` || "",
            delay: 20,
            theme: "mojee",
        });
    },
};
</script>

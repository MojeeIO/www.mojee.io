<template>
    <m-intersect @enter="isInViewport = true" @leave="isInViewport = false">
        <div
            v-if="!isMounted && !isInViewport"
            class="bg-gray-100 rounded-sm pb-full"
        ></div>
        <div
            v-if="isInViewport"
            ref="result"
            class="relative transition-all duration-100 ease-in transform border border-blue-100 rounded-sm cursor-pointer md:rounded-md pb-full hover:scale-110"
            @click="onSelectEmoji"
        >
            <m-emoji
                :emoji="emoji"
                class="absolute inset-0 flex items-center justify-center"
            />
        </div>
    </m-intersect>
</template>

<script>
import { store } from "../store";
import tippy from "tippy.js";

export default {
    name: "EmojiSearchResultItem",

    props: {
        emoji: Object,
    },

    data() {
        return {
            isInViewport: false,
            isMounted: false,
        };
    },

    methods: {
        onSelectEmoji() {
            store.actions.setSelectedEmoji(this.emoji);
            store.actions.setEmojiDrawerState(true);
        },
    },

    watch: {
        isInViewport(val) {
            if (val) {
                this.$nextTick(() => {
                    tippy(this.$refs.result, {
                        content: `:${this.emoji.shortcode}:` || "",
                        delay: 20,
                        theme: "mojee",
                        touch: false,
                    });
                });
            }
        },
    },

    mounted() {
        setTimeout(() => {
            this.isMounted = true;
        }, 1);
    },
};
</script>

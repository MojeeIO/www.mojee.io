<template>
    <div>
        <div
            v-if="results.length"
            class="grid grid-cols-5 gap-3 text-3xl sm:grid-cols-6 md:grid-cols-5 sm:gap-5 lg:gap-6 lg:grid-cols-7 sm:text-4xl md:text-4xl xl:text-6xl"
            :class="{ 'emoji-drawer-open': isEmojiDrawerOpen }"
        >
            <emojis-search-result-item
                v-for="emoji in results"
                :key="emoji.unicode"
                class="emoji"
                :emoji="emoji"
            />
        </div>

        <div v-else>No emojis found...</div>

        <m-drawer placement="bottom" v-model="isEmojiDrawerOpen">
            <emoji-detail :emoji="selectedEmoji || {}" />
        </m-drawer>
    </div>
</template>

<script>
import debounce from "lodash.debounce";
import EmojisSearchResultItem from "./EmojisSearchResultItem";
import EmojiDetail from "./EmojiDetail";
import { store } from "../store";
import Mojee from "../../Mojee";

export default {
    name: "EmojisSearchResults",

    components: {
        EmojisSearchResultItem,
        EmojiDetail,
    },

    data() {
        return {
            results: [],
            delay: 0,
        };
    },

    computed: {
        query() {
            return this.$route.query.q || "";
        },

        category() {
            return parseInt(this.$route.query.category, 10) || 0;
        },

        selectedEmoji() {
            return store.state.selectedEmoji;
        },

        isEmojiDrawerOpen: {
            get: () => store.state.isEmojiDrawerOpen,
            set: (value) => store.actions.setEmojiDrawerState(value),
        },
    },

    watch: {
        results() {
            store.actions.setSearchResultsLength(this.results.length);
        },

        "$route.query": {
            handler(routeQuery) {
                this.search(this.query, { category: this.category });
            },

            deep: true,
        },
    },

    mounted() {
        this.results = Mojee.search(this.query, { category: this.category });
    },

    methods: {
        search: debounce(function (val) {
            this.results =
                val.length >= 2
                    ? Mojee.search(val, { category: this.category })
                    : Mojee.search("", { category: this.category });
        }, 100),
    },
};
</script>

<style scoped>
.emoji-drawer-open .emoji:last-child {
    user-select: none;
}
</style>

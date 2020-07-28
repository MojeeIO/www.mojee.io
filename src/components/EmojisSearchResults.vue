<template>
    <div>
        <div
            v-if="results.length"
            class="grid grid-cols-5 gap-3 text-3xl sm:grid-cols-6 md:grid-cols-5 sm:gap-5 lg:gap-6 lg:grid-cols-7 sm:text-4xl md:text-4xl xl:text-6xl"
        >
            <emojis-search-result-item
                v-for="emoji in results"
                :key="emoji.unicode"
                :emoji="emoji"
            />
        </div>

        <div v-else>No emojis found...</div>

        <m-drawer v-model="isDrawerOpen" @hide="onDrawerHide">
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
            isDrawerOpen: false,
        };
    },

    computed: {
        query() {
            return this.$route.query.q || "";
        },

        selectedEmoji() {
            return store.state.selectedEmoji;
        },
    },

    watch: {
        results() {
            store.actions.setSearchResultsLength(this.results.length);
        },

        query(val) {
            this.search(val);
        },

        selectedEmoji: {
            handler(val) {
                this.isDrawerOpen = val !== null;
            },

            immediate: true,
        },
    },

    mounted() {
        this.results = Mojee.search(this.query);
    },

    methods: {
        search: debounce(function (val) {
            this.results =
                val.length >= 2 ? Mojee.search(val) : Mojee.search("");
        }, 100),

        onDrawerHide() {
            store.actions.setSelectedEmoji(null);
        },
    },
};
</script>

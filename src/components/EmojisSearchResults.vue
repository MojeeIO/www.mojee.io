<template>
    <div>
        <div
            v-if="results.length"
            class="grid grid-cols-5 gap-3 sm:grid-cols-6 md:grid-cols-5 sm:gap-5 lg:gap-6 lg:grid-cols-7"
        >
            <emojis-search-result-item
                v-for="result in results"
                :key="result.unicode"
                :unicode="result.unicode"
            />
        </div>

        <div v-else>No emojis found...</div>
    </div>
</template>

<script>
import debounce from "lodash.debounce";
import EmojisSearchResultItem from "./EmojisSearchResultItem";
import { store } from "../store";
import Mojee from "../../Mojee";

export default {
    name: "EmojisSearchResults",

    components: {
        EmojisSearchResultItem,
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
    },

    watch: {
        results() {
            store.actions.setSearchResultsLength(this.results.length);
        },

        query(val) {
            this.search(val);
        },
    },

    mounted() {
        this.results = Mojee.search(this.query);
    },

    methods: {
        search: debounce(function (val) {
            this.results = Mojee.search(val);
        }, 300),
    },
};
</script>

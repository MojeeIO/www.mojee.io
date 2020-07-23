<template>
    <div
        class="grid grid-cols-5 gap-3 sm:grid-cols-6 md:grid-cols-5 sm:gap-5 lg:gap-6 lg:grid-cols-7"
    >
        <emojis-search-result-item
            v-for="result in results"
            :key="result.unicode"
            :unicode="result.unicode"
        />
    </div>
</template>

<script>
import EmojisSearchResultItem from "./EmojisSearchResultItem";
import Mojee from "../../Mojee";

export default {
    name: "EmojisSearchResults",

    components: {
        EmojisSearchResultItem,
    },

    data() {
        return {
            results: Mojee.data,
        };
    },
};
</script>

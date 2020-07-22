<template>
    <div class="grid grid-cols-7 gap-6">
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

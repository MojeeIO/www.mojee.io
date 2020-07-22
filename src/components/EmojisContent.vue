<template>
    <div class="flex-grow">
        <emojis-search-input />

        <emojis-search-results class="mt-10" />
    </div>
</template>

<script>
import EmojisSearchInput from "./EmojisSearchInput";
import EmojisSearchResults from "./EmojisSearchResults";

export default {
    name: "EmojisContent",

    components: {
        EmojisSearchInput,
        EmojisSearchResults,
    },
};
</script>

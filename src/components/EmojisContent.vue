<template>
    <div class="flex-grow">
        <emojis-search-input />

        <emojis-toolbar />

        <emojis-search-results />
    </div>
</template>

<script>
import EmojisSearchInput from "./EmojisSearchInput";
import EmojisSearchResults from "./EmojisSearchResults";
import EmojisToolbar from "./EmojisToolbar";

export default {
    name: "EmojisContent",

    components: {
        EmojisSearchInput,
        EmojisSearchResults,
        EmojisToolbar,
    },
};
</script>

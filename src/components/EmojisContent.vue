<template>
    <div class="flex-grow">
        <div
            class="sticky px-6 pt-5 -mx-6 bg-white top-16 md:top-0 z-5 bg-opacity-90 md:bg-opacity-95 bg-filters"
            style="backdrop-filter: blur(4px);"
        >
            <emojis-search-input />
            <emojis-toolbar />
        </div>

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

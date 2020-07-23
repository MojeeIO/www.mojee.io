<template>
    <div class="flex items-center justify-between h-16">
        <button
            class="inline-flex items-center justify-center p-2 text-gray-900 md:hidden focus:outline-none"
            @click="onFilterBtnClick"
        >
            <m-icon width="20" height="20"><m-icon-filter /></m-icon>
        </button>

        <div class="text-sm">{{ resultText }}</div>

        <div>
            <button
                class="inline-flex items-center justify-center p-2 text-gray-900 focus:outline-none"
            >
                <m-icon width="20" height="20"><m-icon-grid /></m-icon>
            </button>
            <button
                class="inline-flex items-center justify-center p-2 text-gray-900 focus:outline-none"
            >
                <m-icon width="20" height="20"><m-icon-list /></m-icon>
            </button>
        </div>
    </div>
</template>

<script>
import { store } from "../store";

export default {
    name: "EmojisToolbar",

    computed: {
        resultText() {
            const len = store.state.searchResultsLength;
            const emojis = len === 1 ? "emoji" : "emojis";

            return `Showing ${len} ${emojis}`;
        },
    },

    methods: {
        onFilterBtnClick() {
            store.actions.setFilterSidebarState(true);
        },
    },
};
</script>

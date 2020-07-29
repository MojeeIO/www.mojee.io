import Vue from "vue";

export const store = Vue.observable({
    state: {
        isFilterSidebarOpen: false,
        searchResultsLength: 0,
        selectedEmoji: null,
        isEmojiDrawerOpen: false,
    },

    actions: {
        setFilterSidebarState(newState) {
            store.state.isFilterSidebarOpen = newState;
        },

        setSearchResultsLength(len) {
            store.state.searchResultsLength = len;
        },

        setSelectedEmoji(emoji) {
            store.state.selectedEmoji = emoji;
        },

        setEmojiDrawerState(newState) {
            store.state.isEmojiDrawerOpen = newState;
        },
    },
});

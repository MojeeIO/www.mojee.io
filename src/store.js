import Vue from "vue";

export const store = Vue.observable({
    state: {
        isFilterSidebarOpen: false,
        totalEmojis: 0,
        searchResultsLength: 0,
        selectedEmoji: null,
        isEmojiDrawerOpen: false,
    },

    actions: {
        setFilterSidebarState(newState) {
            store.state.isFilterSidebarOpen = newState;
        },

        setTotalEmojis(value) {
            store.state.totalEmojis = value;
        },

        setSearchResultsLength(value) {
            store.state.searchResultsLength = value;
        },

        setSelectedEmoji(emoji) {
            store.state.selectedEmoji = emoji;
        },

        setEmojiDrawerState(newState) {
            store.state.isEmojiDrawerOpen = newState;
        },
    },
});

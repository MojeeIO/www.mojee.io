import Vue from "vue";

export const store = Vue.observable({
    state: {
        isFilterSidebarOpen: false,
        searchResultsLength: 0,
        selectedEmoji: null,
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
    },
});

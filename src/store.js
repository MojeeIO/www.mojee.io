import Vue from "vue";

export const store = Vue.observable({
    state: {
        isFilterSidebarOpen: false,
        searchResultsLength: 0,
    },

    actions: {
        setFilterSidebarState(newState) {
            store.state.isFilterSidebarOpen = newState;
        },

        setSearchResultsLength(len) {
            store.state.searchResultsLength = len;
        },
    },
});

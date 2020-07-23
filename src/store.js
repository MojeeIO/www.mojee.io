import Vue from "vue";

export const store = Vue.observable({
    state: {
        isFilterSidebarOpen: false,
    },

    actions: {
        setFilterSidebarState(newState) {
            store.state.isFilterSidebarOpen = newState;
        },
    },
});

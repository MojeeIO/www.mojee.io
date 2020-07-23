<template>
    <aside
        class="fixed top-0 z-40 w-4/5 h-full pt-5 pl-6 -ml-6 transition duration-200 ease-in-out transform bg-white rounded-r-lg md:rounded-r-none md:sticky md:w-72 md:translate-x-0 md:pt-0 md:top-6"
        :class="{
            'translate-x-0': isFilterSidebarOpen,
            '-translate-x-full': !isFilterSidebarOpen,
        }"
    >
        <h5 class="mb-4 text-xs text-gray-900">CATEGORY</h5>

        <div v-for="category in categories" :key="category.id" class="mt-1">
            <label class="inline-flex items-center cursor-pointer">
                <input
                    type="radio"
                    :value="category.id"
                    v-model="selected"
                    class="absolute opacity-0"
                />

                <span
                    class="inline-block w-4 h-4 rounded-full"
                    :class="
                        selected === category.id
                            ? 'border-6 border-blue-500'
                            : 'border-2 border-gray-400'
                    "
                ></span>

                <span class="ml-2 text-sm">{{ category.name }}</span>
            </label>
        </div>

        <portal to="overlay">
            <m-overlay
                class="md:hidden"
                :is-open="isFilterSidebarOpen"
                @swipe-left="hide"
                @click="hide"
            />
        </portal>
    </aside>
</template>

<script>
import { store } from "../store";
import updateRouteQuery from "../mixins/updateRouteQuery";

export default {
    name: "SearchSidebar",

    mixins: [updateRouteQuery],

    data() {
        return {
            selected: this.$route.query.category || "all",
            categories: [
                { id: "all", name: "All " },
                { id: "0", name: "Smileys & Emotion " },
                { id: "1", name: "People & Body " },
                { id: "2", name: "Animals & Nature " },
                { id: "3", name: "Food & Drink " },
                { id: "4", name: "Travel & Places " },
                { id: "5", name: "Activities " },
                { id: "6", name: "Objects " },
                { id: "7", name: "Symbols " },
                { id: "8", name: "Flags " },
            ],
        };
    },

    computed: {
        isFilterSidebarOpen() {
            return store.state.isFilterSidebarOpen;
        },
    },

    methods: {
        hide() {
            store.actions.setFilterSidebarState(false);
        },
    },

    watch: {
        selected(val) {
            this.updateRouteQuery({
                name: "category",
                defaultValue: "all",
                newValue: val,
            });
        },
    },
};
</script>

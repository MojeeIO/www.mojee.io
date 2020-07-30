<template>
    <aside class="sticky h-full md:z-0 top-6 w-72">
        <h5 class="mb-4 text-xs text-gray-900">CATEGORY</h5>

        <div v-for="category in categories" :key="category.id" class="mt-1">
            <label class="inline-flex items-center cursor-pointer">
                <input
                    type="radio"
                    :value="category.id"
                    v-model="selected"
                    class="absolute opacity-0"
                    @click="onClick"
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
    </aside>
</template>

<script>
import updateRouteQuery from "../mixins/updateRouteQuery";
import { store } from "../store";

export default {
    name: "SearchSidebar",

    mixins: [updateRouteQuery],

    data() {
        return {
            selected: "",
            categories: [
                { id: "0", name: "All " },
                { id: "1", name: "Smileys & Emotion " },
                { id: "2", name: "People & Body " },
                { id: "3", name: "Animals & Nature " },
                { id: "4", name: "Food & Drink " },
                { id: "5", name: "Travel & Places " },
                { id: "6", name: "Activities " },
                { id: "7", name: "Objects " },
                { id: "8", name: "Symbols " },
                { id: "9", name: "Flags " },
            ],
        };
    },

    watch: {
        selected(val) {
            this.updateRouteQuery({
                name: "category",
                defaultValue: "0",
                newValue: val,
            });
        },

        $route: {
            handler(newRoute) {
                this.$nextTick(() => {
                    this.selected = newRoute.query.category || "0";
                });
            },

            immediate: true,
        },
    },

    methods: {
        onClick() {
            store.actions.setFilterSidebarState(false);
        },
    },
};
</script>

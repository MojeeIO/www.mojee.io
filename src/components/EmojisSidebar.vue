<template>
    <aside class="sticky top-0 h-full pt-5 md:z-0 w-72">
        <h5 class="mb-4 text-xs text-gray-900">CATEGORY</h5>

        <div v-for="category in categories" :key="category.id" class="mt-1">
            <label class="inline-flex items-center cursor-pointer group">
                <input
                    type="radio"
                    :value="category.id"
                    v-model="selected"
                    class="absolute opacity-0"
                    @click="onClick"
                />

                <span
                    class="inline-block w-4 h-4 transition-all duration-75 ease-linear rounded-full"
                    :class="
                        selected === category.id
                            ? 'border-6 border-blue-500'
                            : 'border-2 border-gray-400 group-hover:border-blue-300'
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
                { id: "1", name: "Smileys & People" },
                { id: "2", name: "Animals & Nature" },
                { id: "3", name: "Food & Drink" },
                { id: "4", name: "Travel & Places" },
                { id: "5", name: "Activities" },
                { id: "6", name: "Objects" },
                { id: "7", name: "Symbols" },
                { id: "8", name: "Flags" },
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

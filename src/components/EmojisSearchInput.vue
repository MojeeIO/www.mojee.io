<template>
    <div class="relative flex items-center">
        <input
            type="text"
            placeholder="Search Emojis..."
            class="w-full h-12 pl-5 pr-12 border-2 border-gray-200 rounded-sm md:rounded md:h-15 focus:outline-none focus:border-yellow-500"
            v-model="query"
        />

        <m-icon class="absolute right-0 mr-5 text-gray-400">
            <m-icon-search />
        </m-icon>
    </div>
</template>

<script>
import updateRouteQuery from "../mixins/updateRouteQuery";

export default {
    name: "EmojisSearchInput",

    mixins: [updateRouteQuery],

    data() {
        return {
            query: this.$route.query.q || "",
        };
    },

    watch: {
        query(val) {
            this.updateRouteQuery({
                name: "q",
                defaultValue: "",
                newValue: val,
            });
        },
    },
};
</script>

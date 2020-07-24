<template>
    <div class="relative flex items-center">
        <input
            ref="input"
            type="text"
            placeholder="Search Emojis..."
            class="w-full h-12 pl-5 pr-12 border-2 border-gray-200 rounded-sm md:rounded md:h-15 focus:outline-none focus:border-yellow-500"
            v-model="query"
        />

        <div class="absolute right-0 flex items-center mr-5">
            <button
                v-if="query"
                class="flex items-center justify-center w-6 h-6 text-gray-700 rounded-full hover:bg-gray-200 focus:outline-none"
                @click="query = ''"
            >
                <m-icon width="14" height="14"><m-icon-close /></m-icon>
            </button>

            <m-icon class="ml-1 text-gray-400">
                <m-icon-search />
            </m-icon>
        </div>
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

    mounted() {
        this.$refs.input.focus();
    },
};
</script>

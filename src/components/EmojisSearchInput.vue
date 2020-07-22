<template>
    <div class="relative flex items-center">
        <input
            type="text"
            placeholder="Search Emojis..."
            class="w-full pl-5 pr-12 border-2 border-gray-200 rounded h-15 focus:outline-none focus:border-yellow-500"
        />

        <m-icon class="absolute right-0 mr-5 text-gray-400">
            <m-icon-search />
        </m-icon>
    </div>
</template>

<script>
export default {
    name: "EmojisSearchInput",
};
</script>

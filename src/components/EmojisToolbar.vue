<template>
    <div class="flex items-center justify-between h-16">
        <button
            class="inline-flex items-center justify-center p-2 text-gray-900 md:hidden focus:outline-none"
        >
            <m-icon width="20" height="20"><m-icon-filter /></m-icon>
        </button>

        <div class="text-sm">
            All 1855 emojis.
        </div>

        <div>
            <button
                class="inline-flex items-center justify-center p-2 text-gray-900 focus:outline-none"
            >
                <m-icon width="20" height="20"><m-icon-grid /></m-icon>
            </button>
            <button
                class="inline-flex items-center justify-center p-2 text-gray-900 focus:outline-none"
            >
                <m-icon width="20" height="20"><m-icon-list /></m-icon>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmojisToolbar",
};
</script>

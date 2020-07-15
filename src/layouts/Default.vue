<template>
    <div class="px-6 text-base antialiased text-gray-700 bg-white font-body">
        <m-header />

        <slot />
    </div>
</template>

<script>
import MHeader from "../components/MHeader";
export default {
    name: "LayoutDefault",

    components: {
        MHeader,
    },
};
</script>

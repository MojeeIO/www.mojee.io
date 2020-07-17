<template>
    <div class="px-6 text-base antialiased text-gray-700 bg-white font-body">
        <m-header />

        <slot />

        <m-footer />
    </div>
</template>

<script>
import MHeader from "../components/MHeader";
import MFooter from "../components/MFooter";

export default {
    name: "LayoutDefault",

    components: {
        MHeader,
        MFooter,
    },
};
</script>

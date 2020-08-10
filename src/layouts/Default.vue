<template>
    <div
        class="flex flex-col min-h-screen px-6 text-base antialiased text-gray-700 bg-white font-body"
    >
        <m-header />

        <div class="flex-1 w-full">
            <slot />
        </div>

        <m-footer />

        <portal-target name="overlay" multiple />
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

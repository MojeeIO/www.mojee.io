<template>
    <div
        class="px-6 text-base antialiased text-gray-700 bg-white font-body"
        :class="{ 'm-page-bg': showBgImage }"
    >
        <m-header />

        <slot />

        <m-footer />

        <portal-target name="overlay" />
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

    props: {
        showBgImage: Boolean,
    },
};
</script>

<style scoped>
.m-page-bg {
    background-image: url("/img/hero-bg.svg");
    background-position: top -30rem left 37vw;
    background-repeat: no-repeat;

    @media (min-width: 768px) {
        background-position: top -20rem left 34vw;
    }

    @media (min-width: 1024px) {
        background-position: top -12rem left 43vw;
    }
}
</style>

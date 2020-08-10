<template>
    <div class="px-6 -mx-6 m-page-bg">
        <home-hero />
        <home-feature-api />
        <home-feature-search />
        <home-get-started />
    </div>
</template>

<script>
import HomeHero from "../components/HomeHero";
import HomeFeatureApi from "../components/HomeFeatureApi";
import HomeFeatureSearch from "../components/HomeFeatureSearch";
import HomeGetStarted from "../components/HomeGetStarted";

export default {
    name: "Home",

    components: {
        HomeHero,
        HomeFeatureApi,
        HomeFeatureSearch,
        HomeGetStarted,
    },
};
</script>

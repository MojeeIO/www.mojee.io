<template>
    <Layout>
        <home-hero />
        <home-feature-api />
        <home-feature-search />
        <home-get-started />
    </Layout>
</template>

<script>
import HomeHero from "../components/HomeHero";
import HomeFeatureApi from "../components/HomeFeatureApi";
import HomeFeatureSearch from "../components/HomeFeatureSearch";
import HomeGetStarted from "../components/HomeGetStarted";

export default {
    name: "Home",

    metaInfo: {
        title: "Lightning fast Emoji library for TypeScript & .NET",
    },

    components: {
        HomeHero,
        HomeFeatureApi,
        HomeFeatureSearch,
        HomeGetStarted,
    },
};
</script>

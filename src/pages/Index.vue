<template>
    <Layout>
        <home-hero />
        <home-feature-api />
        <home-feature-search />
    </Layout>
</template>

<script>
import HomeHero from "../components/HomeHero";
import HomeFeatureApi from "../components/HomeFeatureApi";
import HomeFeatureSearch from "../components/HomeFeatureSearch";

export default {
    name: "Home",

    metaInfo: {
        title: "Lightning fast Emoji library for TypeScript & .NET",
    },

    components: {
        HomeHero,
        HomeFeatureApi,
        HomeFeatureSearch,
    },
};
</script>

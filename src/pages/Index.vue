<template>
    <Layout>
        <home-hero />
        <home-feature-api />
        <home-search />
    </Layout>
</template>

<script>
import HomeHero from "../components/HomeHero";
import HomeFeatureApi from "../components/HomeFeatureApi";
import HomeSearch from "../components/HomeSearch";

export default {
    name: "Home",

    metaInfo: {
        title: "Lightning fast Emoji library for TypeScript & .NET",
    },

    components: {
        HomeHero,
        HomeFeatureApi,
        HomeSearch,
    },
};
</script>

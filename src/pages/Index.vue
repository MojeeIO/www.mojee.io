<template>
    <Layout>
        <home-hero />
        <home-feature-api />
    </Layout>
</template>

<script>
import HomeHero from "../components/HomeHero";
import HomeFeatureApi from "../components/HomeFeatureApi";

export default {
    name: "Home",

    metaInfo: {
        title: "Lightning fast Emoji library for TypeScript & .NET",
    },

    components: {
        HomeHero,
        HomeFeatureApi,
    },
};
</script>

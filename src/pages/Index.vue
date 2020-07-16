<template>
    <Layout>
        <home-hero />
    </Layout>
</template>

<script>
import HomeHero from "../components/HomeHero";

export default {
    name: "Home",

    metaInfo: {
        title: "Lightning fast Emoji library for TypeScript & .NET",
    },

    components: {
        HomeHero,
    },
};
</script>

<template>
    <div class="relative">
        <div
            class="relative z-10 flex items-center max-w-screen-xl mx-auto md:pt-6 lg:pt-24"
        >
            <div class="md:w-1/2">
                <h1
                    class="pt-8 text-3xl font-extrabold text-center text-gray-900 md:text-left md:text-4xl lg:text-6xl"
                >
                    Lightning ⚡ fast Emoji library for TypeScript &amp; .NET
                </h1>

                <p
                    class="mt-8 text-center text-yellow-900 md:text-left lg:text-xl"
                >
                    Using emojis in your app has never been easier.
                </p>

                <div class="flex justify-center mt-8 md:justify-start md:mt-12">
                    <m-button class="md:w-40">Download</m-button>
                    <m-button class="ml-5 md:w-40" variant="blue">
                        Docs
                    </m-button>
                </div>
            </div>

            <div class="flex-shrink-0 hidden w-full pl-10 md:block md:w-1/2">
                <home-hero-artwork />
            </div>
        </div>

        <hero-bg class="absolute top-0 right-0 w-full" />
    </div>
</template>

<script>
import HomeHeroArtwork from "./HomeHeroArtwork";
import HeroBg from "./HeroBg";

export default {
    name: "HomeHero",

    components: {
        HomeHeroArtwork,
        HeroBg,
    },
};
</script>

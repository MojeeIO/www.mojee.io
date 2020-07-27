<template>
    <div class="px-6 -mx-6">
        <div
            class="flex items-center max-w-screen-xl pb-16 mx-auto md:pt-6 lg:pt-24 md:pb-32"
        >
            <div class="md:w-1/2">
                <h1
                    class="pt-8 text-3xl font-extrabold text-center text-gray-900 md:text-left md:text-4xl lg:text-6xl"
                >
                    Lightning ⚡ fast Emoji library for .NET &amp; TypeScript
                </h1>

                <p
                    class="mt-8 text-center text-yellow-900 md:text-left lg:text-xl"
                >
                    Using emojis in your app has never been easier.
                </p>

                <div class="flex justify-center mt-8 md:justify-start md:mt-12">
                    <a
                        class="btn btn-yellow btn-md md:w-40"
                        href="https://github.com/MojeeIO/mojee"
                    >
                        Download
                    </a>
                    <a
                        class="ml-5 btn btn-blue btn-md md:w-40"
                        href="https://github.com/MojeeIO/mojee/wiki"
                    >
                        Docs
                    </a>
                </div>
            </div>

            <div class="flex-shrink-0 hidden w-full pl-10 md:block md:w-1/2">
                <home-hero-artwork />
            </div>
        </div>
    </div>
</template>

<script>
import HomeHeroArtwork from "./HomeHeroArtwork";

export default {
    name: "HomeHero",

    components: {
        HomeHeroArtwork,
    },
};
</script>

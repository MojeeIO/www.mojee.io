<template>
    <div
        class="grid items-center max-w-screen-xl mx-auto mt-10 md:mt-20 md:grid-cols-2 md:gap-8 lg:gap-24 xl:gap-32"
    >
        <div>
            <h2
                class="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl"
            >
                Search Emojis...
            </h2>
            <p class="mt-4">
                <span class="font-bold text-gray-900">Mojee.io</span>
                is a great tool for searching emojis. We provide a convenient
                <g-link class="link" to="/emojis">search tool</g-link>
                where you can view and copy emojis.
            </p>
        </div>

        <div class="mt-8 md:mt-0">
            <div
                class="flex items-center justify-between w-full px-4 bg-white rounded shadow-2xl h-15"
            >
                <div class="flex items-center">
                    <span>face</span>
                    <svg
                        class="pl-px"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1"
                        height="25"
                        overflow="visible"
                    >
                        <path d="M0 0h1v25H0z" />
                    </svg>
                </div>

                <m-icon class="text-gray-300">
                    <m-icon-search />
                </m-icon>
            </div>

            <div class="grid grid-cols-4 gap-5 mt-5">
                <div
                    v-for="emoji in emojis"
                    :key="emoji.shortcode"
                    class="relative w-full bg-white rounded shadow-2xl pb-full"
                    :data-tippy-content="emoji.shortcode"
                >
                    <span
                        class="absolute inset-0 flex items-center justify-center text-xl md:text-3xl"
                    >
                        {{ emoji.emoji }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tippy from "tippy.js";

export default {
    name: "HomeFeatureSearch",

    data() {
        return {
            emojis: [
                { emoji: "🤡", shortcode: ":clown_face:" },
                { emoji: "🥶", shortcode: ":cold_face:" },
                { emoji: "🤖", shortcode: ":robot_face:" },
                { emoji: "🦊", shortcode: ":fox_face:" },
            ],
        };
    },

    mounted() {
        tippy("[data-tippy-content]", {
            delay: 100,
        });
    },
};
</script>

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
                    <span>smile</span>
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
                        class="absolute inset-0 flex items-center justify-center text-xl cursor-default md:text-3xl"
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
                { emoji: "😃", shortcode: ":smiley:" },
                { emoji: "😅", shortcode: ":sweat_smile:" },
                { emoji: "😍", shortcode: ":heart_eyes:" },
                { emoji: "😸", shortcode: ":smile_cat:" },
            ],
        };
    },

    mounted() {
        tippy("[data-tippy-content]", {
            delay: 20,
            theme: "mojee",
            touch: "hold",
        });
    },
};
</script>

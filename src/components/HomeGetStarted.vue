<template>
    <div
        class="max-w-screen-xl px-8 pt-8 mx-auto mt-16 overflow-hidden text-center bg-blue-100 rounded-lg md:mt-32 md:px-15 md:pt-15 sm:pb-0"
    >
        <h2
            class="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl"
        >
            Start using Mojee now!
        </h2>

        <p class="max-w-2xl mx-auto mt-4">
            Building a robust and performant Emoji parser is time consuming.
            Mojee does the heavy lifting for you and you can add Emoji support
            to your app in minutes.
        </p>

        <a
            class="mt-10 btn btn-blue btn-md sm:w-40"
            href="https://docs.mojee.io/#getting-started"
        >
            Get started
        </a>

        <div
            class="grid grid-cols-3 gap-5 mt-24 transform translate-y-3 cursor-default lg:translate-y-5 sm:mt-32 xl:px-16 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9"
        >
            <div
                v-for="(emojiArr, index) in emojis"
                :key="index"
                class="grid row-gap-5 lg:grid"
                :class="{
                    hidden: index > 2,
                    'sm:grid': index > 4 && index < 7,
                    'md:grid': index < 7,
                    'transform -translate-y-1/4': index % 2 !== 0,
                }"
            >
                <div
                    v-for="item in emojiArr"
                    :key="item.shortcode"
                    class="relative pb-full"
                    :data-tippy-content="item.shortcode"
                >
                    <div
                        class="absolute inset-0 z-10 flex items-center justify-center text-2xl bg-white rounded-md sm:text-3xl"
                    >
                        {{ item.emoji }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tippy from "tippy.js";

export default {
    name: "HomeGetStarted",

    data() {
        return {
            emojis: [
                [
                    { emoji: "🚴", shortcode: ":bike:" },
                    {
                        emoji: "😜",
                        shortcode: ":stuck_out_tongue_winking_eye:",
                    },
                ],
                [
                    { emoji: "🍭", shortcode: ":lollipop:" },
                    { emoji: "❤️", shortcode: ":heart:" },
                ],
                [
                    { emoji: "🍄", shortcode: ":mushroom:" },
                    { emoji: "👌", shortcode: ":ok_hand:" },
                ],
                [
                    { emoji: "👧", shortcode: ":girl:" },
                    { emoji: "🦄", shortcode: ":unicorn_face:" },
                ],
                [
                    { emoji: "💩", shortcode: ":hankey:" },
                    { emoji: "🚀", shortcode: ":rocket:" },
                ],
                [
                    { emoji: "🐵", shortcode: ":monkey_face:" },
                    { emoji: "🌻", shortcode: ":sunflower:" },
                ],
                [
                    { emoji: "🙋‍♀️", shortcode: ":woman-raising-hand:" },
                    { emoji: "👍", shortcode: ":+1:" },
                ],
                [
                    { emoji: "🍹", shortcode: ":tropical_drink:" },
                    { emoji: "👽", shortcode: ":alien:" },
                ],
                [
                    { emoji: "🐶", shortcode: ":dog:" },
                    { emoji: "😁", shortcode: ":grin:" },
                ],
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

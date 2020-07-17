<template>
    <div
        class="max-w-screen-xl px-8 pt-8 mx-auto mt-16 mb-64 overflow-hidden text-center bg-blue-100 rounded-lg md:mt-40 md:px-15 md:pt-15 sm:pb-0"
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

        <m-button class="mt-10 sm:w-40" variant="blue">Get started</m-button>

        <div
            class="grid grid-cols-3 gap-5 mt-24 transform translate-y-3 lg:translate-y-5 sm:mt-32 xl:px-16 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9"
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
                    v-for="emoji in emojiArr"
                    :key="emoji"
                    class="relative pb-full"
                >
                    <div
                        class="absolute inset-0 z-10 flex items-center justify-center text-2xl bg-white rounded-md sm:text-3xl"
                    >
                        {{ emoji }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeGetStarted",

    data() {
        return {
            emojis: [
                ["🚴", "😜"],
                ["🍭", "❤"],
                ["🍄", "👌"],
                ["👧", "🦄"],
                ["💩", "🚀"],
                ["🙊", "🌻"],
                ["🙋", "👍"],
                ["🍹", "👽"],
                ["🐶", "😁"],
            ],
        };
    },
};
</script>

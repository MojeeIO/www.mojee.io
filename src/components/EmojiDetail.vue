<template>
    <div
        class="max-w-3xl px-6 pt-12 pb-6 mx-auto md:pt-16 md:pb-12 md:flex md:items-center"
    >
        <div class="flex md:items-center xs:flex-col">
            <m-emoji
                ref="emoji"
                :unicode="emoji.unicode"
                class="mb-5 text-8xl xs:text-10xl md:text-16xl lg:text-20xl"
            />
            <div class="items-baseline hidden mt-4 xs:flex">
                <m-emoji :unicode="emoji.unicode" class="text-4xl md:ml-2" />
                <m-emoji :unicode="emoji.unicode" class="text-3xl md:ml-2" />
                <m-emoji :unicode="emoji.unicode" class="text-2xl md:ml-2" />
                <m-emoji :unicode="emoji.unicode" class="md:ml-2" />
            </div>
        </div>

        <div class="xs:mt-6 md:ml-12 lg:ml-12">
            <h2 class="mt-1 text-xl font-bold text-gray-900 lowercase">
                {{ emoji.name || "Untitled" }}
            </h2>

            <div class="grid items-baseline mt-6 codes-grid">
                <div class="text-sm font-medium text-gray-900">Unicode</div>

                <div class="ml-3 font-mono text-xs truncate">
                    <span class="px-2 py-1 bg-gray-100">
                        {{ emoji.unicode }}
                    </span>
                </div>

                <div class="text-sm font-medium text-gray-900">Shortcode</div>

                <div class="mt-3 ml-3 font-mono text-xs truncate">
                    <span class="px-2 py-1 bg-gray-100">
                        :{{ emoji.shortcode }}:
                    </span>
                </div>
            </div>

            <div class="mt-6">
                <h4 class="font-medium text-gray-900">Copy</h4>

                <div class="flex mt-3">
                    <m-button
                        size="xs"
                        @click="copy($refs.emoji.$el.innerText)"
                    >
                        Emoji
                    </m-button>

                    <m-button
                        class="ml-3"
                        size="xs"
                        @click="copy(emoji.unicode)"
                    >
                        Unicode
                    </m-button>

                    <m-button
                        class="ml-3"
                        size="xs"
                        @click="copy(`:${emoji.shortcode}:`)"
                    >
                        Shortcode
                    </m-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmojiDetail",

    props: {
        emoji: {
            type: Object,
            required: true,
        },
    },

    methods: {
        async copy(text) {
            if (!text) {
                return;
            }

            await navigator.clipboard.writeText(text);
        },
    },
};
</script>

<style scoped>
h2::first-letter {
    text-transform: uppercase;
}

.codes-grid {
    grid-template-columns: auto 1fr;
}
</style>

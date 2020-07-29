<template>
    <div class="flex items-center px-6 pb-10 mx-auto pt-15">
        <div class="flex flex-col mx-auto md:flex-row md:items-center">
            <div class="flex md:items-center xs:flex-col">
                <m-emoji
                    ref="emoji"
                    :emoji="emoji"
                    class="mb-5 text-8xl xs:text-10xl md:text-16xl lg:text-20xl"
                />
                <div class="items-baseline hidden mt-4 xs:flex">
                    <m-emoji :emoji="emoji" class="text-4xl md:ml-2" />
                    <m-emoji :emoji="emoji" class="text-3xl md:ml-2" />
                    <m-emoji :emoji="emoji" class="text-2xl md:ml-2" />
                    <m-emoji :emoji="emoji" class="md:ml-2" />
                </div>
            </div>

            <div class="md:ml-12 lg:ml-12">
                <h2
                    class="mt-1 text-xl font-extrabold text-gray-900 lowercase md:text-3xl"
                >
                    {{ title }}
                </h2>

                <div class="grid items-baseline mt-6 codes-grid md:mt-10">
                    <div class="text-sm font-medium text-gray-900">Unicode</div>

                    <div class="ml-3 font-mono text-xs truncate">
                        <span class="px-2 py-1 bg-gray-100">
                            {{ emoji.unicode }}
                        </span>
                    </div>

                    <div class="text-sm font-medium text-gray-900">
                        Shortcode
                    </div>

                    <div class="mt-3 ml-3 font-mono text-xs truncate">
                        <span class="px-2 py-1 bg-gray-100">
                            :{{ emoji.shortcode }}:
                        </span>
                    </div>
                </div>

                <div class="mt-6 md:mt-10">
                    <h4 class="font-medium text-gray-900">Copy</h4>

                    <div class="flex mt-3">
                        <emoji-copy-button
                            label="Emoji"
                            :copy-text="emojiChar"
                        />

                        <emoji-copy-button
                            class="ml-3"
                            label="Unicode"
                            :copy-text="emoji.unicode"
                        />

                        <emoji-copy-button
                            class="ml-3"
                            label="Shortcode"
                            :copy-text="`:${emoji.shortcode}:`"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EmojiCopyButton from "./EmojiCopyButton";

export default {
    name: "EmojiDetail",

    components: {
        EmojiCopyButton,
    },

    props: {
        emoji: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {
            title: "",
            emojiChar: "",
        };
    },

    updated() {
        this.emojiChar = this.$refs.emoji ? this.$refs.emoji.innerText : "";

        if (this.emoji.name) {
            this.title = this.emoji.name;
        } else if (this.emoji.shortcode) {
            this.title = this.emoji.shortcode.split(/_|-/).join(" ");
        } else {
            this.title = "Untitled";
        }
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

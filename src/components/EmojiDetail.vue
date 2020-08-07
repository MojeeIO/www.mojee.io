<template>
    <div class="flex items-center px-6 py-6 mx-auto md:pt-15 md:pb-10">
        <div class="flex flex-col mx-auto md:items-center md:flex-row">
            <div class="flex items-baseline md:items-center md:flex-col">
                <m-emoji
                    ref="emoji"
                    :emoji="emoji"
                    class="text-8xl md:text-16xl lg:text-20xl"
                />
                <div class="flex items-baseline md:mt-10">
                    <m-emoji :emoji="emoji" class="text-4xl" />
                    <m-emoji :emoji="emoji" class="text-3xl md:ml-2" />
                    <m-emoji :emoji="emoji" class="text-2xl md:ml-2" />
                    <m-emoji :emoji="emoji" class="md:ml-2" />
                </div>
            </div>

            <div class="md:ml-12 lg:ml-12">
                <h2
                    class="mt-4 text-xl font-extrabold text-gray-900 lowercase md:mt-0 md:text-3xl"
                >
                    {{ title }}
                </h2>

                <div class="grid items-baseline mt-2 codes-grid md:mt-10">
                    <div class="text-sm font-medium text-gray-900">Unicode</div>

                    <div class="ml-3 font-mono text-xs truncate">
                        <span class="px-2 py-1 bg-gray-100">
                            {{ emoji.unicode }}
                        </span>
                    </div>

                    <div class="text-sm font-medium text-gray-900">
                        Shortcode
                    </div>

                    <div class="mt-1 ml-3 font-mono text-xs truncate md:mt-3">
                        <span class="px-2 py-1 bg-gray-100">
                            :{{ emoji.shortcode }}:
                        </span>
                    </div>
                </div>

                <div class="mt-4 md:mt-10">
                    <div class="flex mt-3">
                        <emoji-copy-button
                            ref="copyEmoji"
                            label="Emoji"
                            :copy-text="emojiChar"
                        />

                        <emoji-copy-button
                            ref="copyUnicode"
                            class="ml-3"
                            label="Unicode"
                            :copy-text="emoji.unicode"
                        />

                        <emoji-copy-button
                            ref="copyShortcode"
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
import tippy from "tippy.js";
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

    computed: {
        copyButtons() {
            return [
                { ref: "copyEmoji", copyText: this.emojiChar },
                { ref: "copyUnicode", copyText: this.emoji.unicode },
                { ref: "copyShortcode", copyText: this.emoji.shortcode },
            ];
        },
    },

    mounted() {
        this.initializeTooltips();
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

        this.updateTooltipContent();
    },

    methods: {
        initializeTooltips() {
            [
                this.emojiTooltip,
                this.unicodeTooltip,
                this.shortcodeTooltip,
            ] = this.copyButtons.map((btn) =>
                tippy(this.$refs[btn.ref].$el, {
                    content: btn.copyText,
                    theme: "mojee",
                    touch: false,
                }),
            );
        },

        updateTooltipContent() {
            this.emojiTooltip.setContent(this.emojiChar);
            this.unicodeTooltip.setContent(this.emoji.unicode);
            this.shortcodeTooltip.setContent(`:${this.emoji.shortcode}:`);
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

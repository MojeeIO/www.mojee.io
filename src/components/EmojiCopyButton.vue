<template>
    <m-button
        class="relative overflow-hidden"
        size="xs"
        style="align-items: start !important; border: none !important;"
        @click="copy(copyText)"
    >
        <div
            class="flex flex-col h-16 transition-all duration-100"
            :class="{ '-mt-8': isCopied }"
        >
            <div class="flex items-center justify-center h-8">
                {{ btnLabel }}
            </div>

            <div class="flex items-center justify-center h-8">
                Copied!
            </div>
        </div>
    </m-button>
</template>

<script>
import * as clipboard from "clipboard-polyfill/text";

export default {
    name: "EmojiCopyButton",

    props: {
        copyText: String,
        label: String,
    },

    data() {
        return {
            btnLabel: this.label || "",
            isCopied: false,
        };
    },

    methods: {
        async copy(text) {
            if (!text) {
                return;
            }

            await clipboard.writeText(text);

            this.isCopied = true;

            setTimeout(() => {
                this.isCopied = false;
            }, 2000);
        },
    },
};
</script>

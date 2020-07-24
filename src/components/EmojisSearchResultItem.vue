<template>
    <div class="relative transition-all duration-100 ease-in transform border border-blue-100 rounded-sm cursor-pointer md:rounded-md pb-full hover:scale-110" @click="onSelectEmoji">
        <div 
            v-html="`&\#x${emoji.unicode.replace(/-/g,'&\#x')};`"
            class="absolute inset-0 flex items-center justify-center"
        />
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: "EmojiSearchResultItem",

    props: {
        emoji: Object,
    },

    methods: {
        onSelectEmoji() {
            store.actions.setSelectedEmoji(this.emoji)
        }
    }
};
</script>

<template>
    <div class="relative border border-blue-200 rounded-md pb-full">
        <div 
            v-html="`&#x${unicode};`" 
            class="absolute inset-0 flex items-center justify-center text-2xl"
        />
    </div>
</template>

<script>
export default {
    name: "EmojiSearchResultItem",

    props: {
        unicode: String,
    }
};
</script>

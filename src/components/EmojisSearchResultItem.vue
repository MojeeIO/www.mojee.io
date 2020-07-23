<template>
    <div class="relative transition-all duration-100 ease-in border border-blue-200 rounded-sm cursor-pointer md:rounded-md pb-full hover:shadow-border-2">
        <div 
            v-html="`&#x${unicode};`" 
            class="absolute inset-0 flex items-center justify-center text-xl md:text-2xl xl:text-3xl"
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

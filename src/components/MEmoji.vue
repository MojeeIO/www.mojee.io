<template>
    <div v-html="`&\#x${unicode.replace(/-/g, '&\#x')};`" />
</template>

<script>
export default {
    name: "MEmoji",

    props: {
        unicode: {
            type: String,
            default: "",
        },
    },
};
</script>

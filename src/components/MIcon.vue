<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon-base"
        :width="width"
        :height="height"
        viewBox="0 0 24 24"
        :aria-labelledby="name"
        role="presentation"
    >
        <g :fill="color">
            <slot />
        </g>
    </svg>
</template>

<script>
export default {
    name: "DocIcon",

    props: {
        name: {
            type: String,
            default: "icon",
        },

        width: {
            type: [Number, String],
            default: 18,
        },

        height: {
            type: [Number, String],
            default: 18,
        },

        color: {
            type: String,
            default: "currentColor",
        },
    },
};
</script>

<style scoped>
.icon-base {
    margin-bottom: 1px;
}
</style>

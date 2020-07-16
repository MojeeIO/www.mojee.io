<template>
    <div v-show="isActive">
        <slot />
    </div>
</template>

<script>
export default {
    name: "MTab",

    props: {
        label: String,
        visible: Boolean,
    },

    data() {
        return {
            isActive: this.visible,
            isTabItem: true,
        };
    },
};
</script>

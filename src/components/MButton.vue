<template>
    <button class="btn" :class="[variantClass, sizeClass]" @click="onClick">
        <slot />
    </button>
</template>

<script>
const variantClasses = {
    yellow: "btn-yellow",
    blue: "btn-blue",
    white: "btn-white",
};

const sizeClasses = {
    sm: "btn-sm",
    md: "btn-md",
};

const noop = () => {};

export default {
    name: "MButton",

    props: {
        variant: {
            type: String,
            default: "yellow",
        },

        size: {
            type: String,
            default: "md",
        },

        to: [String, Object],
    },

    computed: {
        variantClass() {
            return variantClasses[this.variant] || variantClasses.yellow;
        },

        sizeClass() {
            return sizeClasses[this.size] || sizeClasses.md;
        },
    },

    methods: {
        onClick() {
            if (this.to) {
                this.$router.push(to).catch(noop);
            }
        },
    },
};
</script>

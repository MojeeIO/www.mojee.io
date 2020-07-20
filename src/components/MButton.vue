<template>
    <button
        class="font-bold whitespace-no-wrap transition-all duration-300 ease-out transform select-none hover:-translate-y-px focus:outline-none hover:shadow-lg active:shadow-none active:translate-y-0"
        :class="[variantClass, sizeClass]"
    >
        <slot />
    </button>
</template>

<script>
const variantClasses = {
    yellow:
        "border-2 border-yellow-500 bg-yellow-500 text-yellow-900 focus:border-yellow-700",
    blue:
        "border-2 border-blue-300 bg-blue-300 text-blue-900 focus:border-blue-700",
    white: "border-2 border-white bg-white text-blue-900 focus:border-blue-100",
};

const sizeClasses = {
    sm: "h-10 px-5 rounded-sm text-sm",
    md: "h-15 px-6 rounded",
};

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
    },

    computed: {
        variantClass() {
            return variantClasses[this.variant] || variantClasses.yellow;
        },

        sizeClass() {
            return sizeClasses[this.size] || sizeClasses.md;
        },
    },
};
</script>

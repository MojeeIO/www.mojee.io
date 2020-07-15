<template>
    <button
        class="font-bold transition-all duration-300 ease-out transform hover:-translate-y-px focus:outline-none hover:shadow-md active:shadow-none active:translate-y-0 focus:border-yellow-700"
        :class="[variationClass, sizeClass]"
    >
        <slot />
    </button>
</template>

<script>
const variationClasses = {
    yellow: "border-2 border-yellow-500 bg-yellow-500 text-yellow-900",
    blue: "border-2 border-blue-500 bg-blue-500 text-blue-900",
};

const sizeClasses = {
    sm: "h-10 px-5 rounded-sm text-sm",
    md: "h-15 px-6 rounded",
};

export default {
    name: "MButton",

    props: {
        variation: {
            type: String,
            default: "yellow",
        },

        size: {
            type: String,
            default: "md",
        },
    },

    computed: {
        variationClass() {
            return variationClasses[this.variation] || variationClass.yellow;
        },

        sizeClass() {
            return sizeClasses[this.size] || sizeClasses.md;
        },
    },
};
</script>

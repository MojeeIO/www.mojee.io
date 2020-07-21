<template>
    <div class="flex mt-6" :class="textColor">
        <m-icon class="flex-shrink-0 mt-1" width="24" height="24">
            <m-icon-checkbox-checked />
        </m-icon>
        <p class="ml-3">
            <slot />
        </p>
    </div>
</template>

<script>
export default {
    name: "PricingFeature",

    props: {
        textColor: {
            type: String,
            default: "text-gray-900",
        },
    },
};
</script>

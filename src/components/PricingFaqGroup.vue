<template>
    <div>
        <slot />
    </div>
</template>

<script>
export default {
    name: "PricingFaqGroup",

    data() {
        return {
            // For tracking active state of faq items
            faqItems: {},
        };
    },
};
</script>

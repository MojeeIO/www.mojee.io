<template>
    <div class="flex flex-col p-8 rounded-lg md:p-10" :class="rootClasses">
        <h3 class="text-3xl font-bold" :class="titleClasses">{{ title }}</h3>

        <div class="flex items-start mt-4" :class="priceClasses">
            <div class="text-4xl opacity-50">$</div>
            <div class="ml-1 font-bold leading-none text-8xl">{{ price }}</div>
        </div>

        <div class="mt-6 mb-20 text-sm">
            <slot />
        </div>

        <m-button class="w-full mt-auto" :variant="btnVariant">
            {{ btnText }}
        </m-button>
    </div>
</template>

<script>
export default {
    name: "PricingBox",

    props: {
        title: String,
        price: Number,
        variant: String,
        btnText: String,
    },

    data() {
        return {
            rootClasses: "",
            titleClasses: "",
            priceClasses: "",
            btnVariant: "",
        };
    },

    watch: {
        variant: {
            handler: function (val) {
                if (val === "blue") {
                    this.rootClasses =
                        "bg-blue-500 border border-blue-500 text-white";
                    this.btnVariant = "white";
                }

                if (val === "blue-outline" || val === "yellow-outline") {
                    this.titleClasses = "text-gray-900";
                }

                if (val === "blue-outline") {
                    this.rootClasses = "bg-white border border-blue-200";
                    this.priceClasses = "text-blue-500";
                    this.btnVariant = "blue";
                }

                if (val === "yellow-outline") {
                    this.rootClasses = "bg-white border border-yellow-300";
                    this.priceClasses = "text-yellow-500";
                    this.btnVariant = "yellow";
                }
            },
            immediate: true,
            deep: true,
        },
    },
};
</script>

<template>
    <div
        class="flex flex-col p-8 rounded-lg md:p-6 lg:p-10"
        :class="rootClasses"
    >
        <h3 class="text-3xl font-bold" :class="titleClasses">{{ title }}</h3>

        <div class="flex items-start mt-4" :class="priceClasses">
            <div class="-mt-px text-3xl opacity-50">$</div>
            <div class="flex flex-wrap items-start ml-1 -mt-2 font-bold">
                <div
                    class="relative flex items-center mr-2"
                    :class="
                        priceDiscounted ? 'text-3xl xl:text-5xl' : 'text-8xl'
                    "
                >
                    <span>{{ price }}</span>
                    <span
                        :class="{
                            'absolute w-full h-1 bg-red-500 z-5 -rotate-45 transform': priceDiscounted,
                        }"
                    ></span>
                </div>
                <div
                    v-if="priceDiscounted"
                    class="text-4xl lg:text-6xl xl:text-8xl"
                >
                    {{ priceDiscounted }}
                </div>
            </div>
        </div>

        <div class="mt-6 mb-12 text-sm">
            <slot />
        </div>

        <a class="w-full mt-auto btn btn-md" :class="btnClass" :href="btnLink">
            {{ btnText }}
        </a>
    </div>
</template>

<script>
export default {
    name: "PricingBox",

    props: {
        title: String,
        price: Number,
        priceDiscounted: Number,
        variant: String,
        btnClass: String,
        btnText: String,
        btnLink: String,
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

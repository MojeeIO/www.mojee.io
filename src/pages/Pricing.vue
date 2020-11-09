<template>
    <div class="px-6 -mx-6 m-page-bg">
        <div class="max-w-screen-xl mx-auto pt-15">
            <div class="text-center">
                <h1
                    class="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl"
                >
                    Pricing for teams of all sizes
                </h1>
                <p class="mt-2">Simple licensing options for everyone</p>
            </div>

            <pricing-boxes class="mt-15" />

            <pricing-faq class="mt-32" />
        </div>
    </div>
</template>

<script>
import PricingBoxes from "../components/PricingBoxes";
import PricingFaq from "../components/PricingFaq";

const title = "Pricing";
const description =
    "Pricing for teams of all sizes. Simple licensing options for everyone";

export default {
    metaInfo() {
        return {
            title,

            meta: [
                {
                    key: "description",
                    name: "description",
                    content: description,
                },
                {
                    key: "og:title",
                    name: "og:title",
                    content: title,
                },
                {
                    key: "og:description",
                    name: "og:description",
                    content: description,
                },

                {
                    key: "twitter:title",
                    name: "twitter:title",
                    content: title,
                },
                {
                    key: "twitter:description",
                    name: "twitter:description",
                    content: description,
                },
            ],
        };
    },

    components: {
        PricingBoxes,
        PricingFaq,
    },
};
</script>

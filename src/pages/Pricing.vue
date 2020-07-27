<template>
    <Layout show-bg-image>
        <div class="max-w-screen-xl mx-auto pt-15">
            <div class="text-center">
                <h1
                    class="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl"
                >
                    Choose your plan
                </h1>
                <p class="mt-2">Simple licensing options for everyone</p>
            </div>

            <pricing-boxes class="mt-15" />

            <pricing-faq class="mt-32" />
        </div>
    </Layout>
</template>

<script>
import PricingBoxes from "../components/PricingBoxes";
import PricingFaq from "../components/PricingFaq";

export default {
    metaInfo: {
        title: "Pricing",
    },

    components: {
        PricingBoxes,
        PricingFaq,
    },
};
</script>

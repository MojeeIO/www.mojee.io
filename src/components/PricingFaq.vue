<template>
    <div class="max-w-3xl mx-auto">
        <div class="text-center">
            <h2
                class="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl"
            >
                Frequently asked questions
            </h2>

            <p class="max-w-2xl mx-auto mt-4">
                We do our best to answer all of your questions. If you can’t
                find an answer below, feel free to
                <a class="link" :href="`https://twitter.com/${twitter}`">
                    tweet
                </a>
                , submit a GitHub
                <a
                    class="link"
                    :href="`https://github.com/MojeeIO/mojee/issues`"
                >
                    issue
                </a>
                , or
                <a class="link" :href="`mailto:${email}`">email</a>
                us.
            </p>
        </div>

        <pricing-faq-group class="mt-16">
            <pricing-faq-item
                id="q1"
                question="Vivamus elementum semper nisi?"
                active
            >
                <p>
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
            </pricing-faq-item>

            <pricing-faq-item
                id="q2"
                question="Maecenas tempus, tellus eget condimentum rhoncus?"
            >
                <p>
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium.
                </p>
            </pricing-faq-item>
        </pricing-faq-group>
    </div>
</template>

<static-query>
query {
    metadata {
        social {
            id
            value
        }
    }
}
</static-query>

<script>
import PricingFaqGroup from "./PricingFaqGroup";
import PricingFaqItem from "./PricingFaqItem";

export default {
    name: "PricingFaq",

    components: {
        PricingFaqItem,
        PricingFaqGroup,
    },

    computed: {
        email() {
            return this.$static.metadata.social.find((i) => i.id === "email")
                .value;
        },

        twitter() {
            return this.$static.metadata.social.find((i) => i.id === "twitter")
                .value;
        },
    },
};
</script>

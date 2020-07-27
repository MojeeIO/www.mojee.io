<template>
    <div class="grid gap-5 lg:gap-10 md:grid-cols-3">
        <!-- Team Plan -->
        <pricing-box
            variant="blue-outline"
            title="Team"
            :price="teamPrice"
            btn-text="Buy"
        >
            <ul>
                <li>
                    <pricing-feature>
                        All Pro features plus licensing for up to five Employees and Contractors
                    </pricing-feature>
                </li>
                <li
                    class="flex mt-6 cursor-pointer"
                    @click="includeSource = !includeSource"
                >
                    <m-icon
                        class="flex-shrink-0 mt-1"
                        :class="
                            includeSource ? 'text-gray-900' : 'text-blue-500'
                        "
                        width="24"
                        height="24"
                    >
                        <m-icon-checkbox-checked v-if="includeSource" />
                        <m-icon-checkbox-unchecked v-else />
                    </m-icon>
                    <p class="ml-3">
                        Include a copy of the Mojee library source code for +$350 ($499 total)
                    </p>
                </li>
            </ul>
        </pricing-box>

        <!-- Pro Plan -->
        <pricing-box
            variant="blue"
            title="Pro"
            :price="price.pro"
            btn-text="Buy"
        >
            <ul>
                <li>
                    <pricing-feature text-color="text-white">
                        Per developer, unlimited projects
                    </pricing-feature>
                </li>
                <li>
                    <pricing-feature text-color="text-white">
                        Full Mojee API including 1000's of emojis, search, categories, and skin tones
                    </pricing-feature>
                </li>
            </ul>
        </pricing-box>

        <!-- Free Plan -->
        <pricing-box
            variant="yellow-outline"
            title="Free"
            :price="price.community"
            btn-text="Download"
        >
            <ul>
                <li>
                    <pricing-feature>
                        Limited to 200 popular emojis
                    </pricing-feature>
                </li>
            </ul>
        </pricing-box>
    </div>
</template>

<script>
import PricingBox from "./PricingBox";
import PricingFeature from "./PricingFeature";

export default {
    name: "PricingBoxes",

    components: {
        PricingBox,
        PricingFeature,
    },

    data() {
        return {
            price: {
                community: 0,
                pro: 35,
                team: 149,
                sourceCode: 350,
            },
            includeSource: false,
        };
    },

    computed: {
        teamPrice() {
            return this.includeSource
                ? this.price.team + this.price.sourceCode
                : this.price.team;
        },
    },
};
</script>

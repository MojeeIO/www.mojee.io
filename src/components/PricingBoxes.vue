<template>
    <div class="grid gap-5 lg:gap-10 md:grid-cols-3">
        <!-- Team Plan -->
        <pricing-box
            variant="blue-outline"
            title="Team"
            :price="teamPrice"
            :price-discounted="teamPriceDiscounted"
            btn-class="btn-blue"
            btn-link="https://secure.2checkout.com/order/checkout.php?PRODS=33243579"
            btn-text="Buy"
        >
            <ul>
                <li>
                    <pricing-feature>
                        All Pro features plus licensing for up to five Employees
                        and Contractors
                    </pricing-feature>
                </li>
                <!-- <li
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
                        Include a copy of the Mojee library source code for
                        +$350
                    </p>
                </li> -->
            </ul>
        </pricing-box>

        <!-- Pro Plan -->
        <pricing-box
            variant="blue"
            title="Pro"
            :price="price.pro"
            :price-discounted="price.proDiscounted"
            btn-class="btn-white"
            btn-link="https://secure.2checkout.com/order/checkout.php?PRODS=33242889"
            btn-text="Buy"
        >
            <ul>
                <li>
                    <pricing-feature text-color="text-white">
                        Per developer, unlimited projects, and perpetual license
                    </pricing-feature>
                </li>
                <li>
                    <pricing-feature text-color="text-white">
                        Full Mojee API including 1000's of emojis, search, and
                        categories
                    </pricing-feature>
                </li>
            </ul>
        </pricing-box>

        <!-- Free Plan -->
        <pricing-box
            variant="yellow-outline"
            title="Free"
            :price="price.community"
            btn-class="btn-yellow"
            btn-link="https://docs.mojee.io/#getting-started"
            btn-text="Download"
        >
            <ul>
                <li>
                    <pricing-feature>
                        Limited to 100 popular emojis
                    </pricing-feature>
                </li>
            </ul>

            <div
                class="p-5 mt-8 font-mono text-xs text-gray-200 bg-gray-900 rounded-sm"
            >
                <p class="text-green-500"># Install using dotnet CLI</p>
                <p>dotnet add package Mojee</p>
                <p class="mt-3 text-green-500"># or, install using NuGet CLI</p>
                <p>Install-Package Mojee</p>
            </div>
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
                pro: 85,
                proDiscounted: null,
                team: 350,
                teamDiscounted: null,
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

        teamPriceDiscounted() {
            return this.includeSource
                ? this.price.teamDiscounted + this.price.sourceCode
                : this.price.teamDiscounted;
        },
    },
};
</script>

<template>
    <div class="grid gap-5 lg:gap-10 md:grid-cols-3">
        <pricing-box
            variant="blue-outline"
            title="Team"
            :price="teamPrice"
            btn-text="Buy"
        >
            <ul>
                <li class="flex mt-6">
                    <m-icon
                        class="flex-shrink-0 mt-1 text-gray-900"
                        width="24"
                        height="24"
                    >
                        <m-icon-checkbox-checked />
                    </m-icon>
                    <p class="ml-3">
                        All Pro features plus licensing for up to five Employees
                        and Contractors of the Licensee.
                    </p>
                </li>
                <li class="flex mt-6 cursor-pointer" @click="toggleSourceCode">
                    <m-icon
                        v-if="includeSource"
                        class="flex-shrink-0 mt-1 text-gray-900"
                        width="24"
                        height="24"
                    >
                        <m-icon-checkbox-checked />
                    </m-icon>

                    <m-icon
                        v-else
                        color="text-gray-900"
                        class="flex-shrink-0 mt-1 text-blue-500"
                        width="24"
                        height="24"
                    >
                        <m-icon-checkbox-unchecked />
                    </m-icon>
                    <p class="ml-3">
                        Include a copy of the Mojee source code in C# or
                        TypeScript for +$250 ($349 total).
                    </p>
                </li>
            </ul>
        </pricing-box>

        <pricing-box variant="blue" title="Pro" :price="35" btn-text="Buy">
            <ul>
                <li class="flex mt-6">
                    <m-icon
                        class="flex-shrink-0 mt-1 text-white"
                        width="24"
                        height="24"
                    >
                        <m-icon-checkbox-checked />
                    </m-icon>
                    <p class="ml-3">
                        Per developer, unlimited projects.
                    </p>
                </li>
                <li class="flex mt-6">
                    <m-icon
                        class="flex-shrink-0 mt-1 text-white"
                        width="24"
                        height="24"
                    >
                        <m-icon-checkbox-checked />
                    </m-icon>
                    <p class="ml-3">
                        All Mojee API and Emoji class features, including all
                        emojis, search, vendor images, categories, skin tones
                    </p>
                </li>
            </ul>
        </pricing-box>

        <pricing-box
            variant="yellow-outline"
            title="Free"
            :price="0"
            btn-text="Download"
        >
            <ul>
                <li class="flex mt-6">
                    <m-icon
                        class="flex-shrink-0 mt-1 text-gray-900"
                        width="24"
                        height="24"
                    >
                        <m-icon-checkbox-checked />
                    </m-icon>
                    <p class="ml-3">
                        Only
                        <code
                            class="px-2 py-1 text-xs text-yellow-900 bg-yellow-100 rounded-sm"
                        >
                            Mojee.Replace(text)
                        </code>
                        available for 100 pre-selected emojis.
                    </p>
                </li>
            </ul>
        </pricing-box>
    </div>
</template>

<script>
import PricingBox from "./PricingBox";

export default {
    name: "PricingBoxes",

    components: {
        PricingBox,
    },

    data() {
        return {
            includeSource: false,
        };
    },

    computed: {
        teamPrice() {
            return this.includeSource ? 99 + 250 : 99;
        },
    },

    methods: {
        toggleSourceCode() {
            this.includeSource = !this.includeSource;
        },
    },
};
</script>

<template>
    <div class="grid gap-10 md:grid-cols-3">
        <pricing-box
            variant="blue-outline"
            title="Team"
            :price="99"
            btn-text="Buy"
        >
            <ul>
                <li class="flex mt-6">
                    <m-icon
                        class="flex-shrink-0 mt-1"
                        width="24"
                        height="24"
                        color="text-gray-900"
                    >
                        <m-icon-checkbox-checked />
                    </m-icon>
                    <p class="ml-3">
                        All Pro features plus licensing for up to five Employees
                        and Contractors of the Licensee.
                    </p>
                </li>
                <li class="flex mt-6">
                    <m-icon
                        class="flex-shrink-0 mt-1"
                        width="24"
                        height="24"
                        color="text-gray-900"
                    >
                        <m-icon-checkbox-checked />
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
                        class="flex-shrink-0 mt-1"
                        width="24"
                        height="24"
                        color="text-white"
                    >
                        <m-icon-checkbox-checked />
                    </m-icon>
                    <p class="ml-3">
                        Per developer, unlimited projects.
                    </p>
                </li>
                <li class="flex mt-6">
                    <m-icon
                        class="flex-shrink-0 mt-1"
                        width="24"
                        height="24"
                        color="text-white"
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
                        class="flex-shrink-0 mt-1"
                        width="24"
                        height="24"
                        color="text-gray-900"
                    >
                        <m-icon-checkbox-checked />
                    </m-icon>
                    <p class="ml-3">
                        Only
                        <code>Mojee.Replace(text)</code>
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
};
</script>

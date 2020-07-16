<template>
    <div
        class="flex flex-col max-w-screen-xl mx-auto md:flex-row md:items-center md:py-32"
    >
        <div class="order-3 md:order-1 md:w-1/2 md:pr-4">
            <m-tabs
                class="max-w-xl bg-gray-800 rounded"
                nav-classes="bg-gray-700 rounded-t flex overflow-hidden text-gray-300"
                nav-item-classes=" flex items-center h-15 text-sm px-8 hover:text-white transition-colors ease-in duration-150"
                nav-item-active-classes="bg-gray-800 text-white"
                tab-content-classes="p-8 text-gray-300"
            >
                <m-tab label="TypeScript" visible>
                    TypeScript code goes here
                </m-tab>

                <m-tab label=".NET">
                    .NET code goes here
                </m-tab>
            </m-tabs>
        </div>

        <div class="order-2 mb-8 md:w-1/2 md:pl-15 md:mb-0">
            <h2 class="text-2xl font-extrabold text-gray-900 md:text-3xl">
                Simple, semantic API
            </h2>
            <p class="max-w-md mt-4">
                Mojee provides a semantic API for .NET and TypeScript. These are
                just a few examples. You can learn more reading the
                <a href="#">docs</a>
                .
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeFeatureApi",
};
</script>

<style scoped>
.m-tabs-api {
}
</style>

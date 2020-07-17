<template>
    <div
        class="grid items-center max-w-screen-xl pt-10 mx-auto md:grid-cols-2 md:gap-8 lg:gap-24 xl:gap-32"
    >
        <div class="relative flex items-center order-3 md:order-1">
            <div class="w-full mt-8 md:absolute">
                <m-tabs
                    class="w-full bg-gray-800 rounded"
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

            <svg
                class="hidden w-full max-w-sm mx-auto text-blue-100 fill-current md:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                overflow="visible"
            >
                <circle cx="50" cy="50" r="50" />
            </svg>
        </div>

        <div class="order-2">
            <h2
                class="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl"
            >
                Simple, semantic API
            </h2>
            <p class="mt-4">
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

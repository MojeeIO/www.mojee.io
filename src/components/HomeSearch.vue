<template>
    <div
        class="flex flex-col max-w-screen-xl pt-12 mx-auto mb-40 md:flex-row md:items-center md:pt-16"
    >
        <div class="md:w-1/2 md:max-w-xl">
            <h2
                class="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl"
            >
                Search Emojis...
            </h2>
            <p class="mt-4">
                <span class="font-bold text-gray-900">Mojee.io</span>
                is a great tool for searching emojis. We provide a convenient
                <g-link class="link" to="/">search tool</g-link>
                where you can view and copy emojis.
            </p>
        </div>

        <div class="mt-8 md:w-1/2 md:max-w-xl md:pl-12 xl:pl-0 lg:ml-auto">
            <div
                class="flex items-center justify-between w-full px-4 bg-white rounded shadow-2xl h-15"
            >
                <div class="flex items-center">
                    <span>holiday</span>
                    <svg
                        class="pl-px"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1"
                        height="25"
                        overflow="visible"
                    >
                        <path d="M0 0h1v25H0z" />
                    </svg>
                </div>

                <m-icon class="text-gray-300">
                    <m-icon-search />
                </m-icon>
            </div>

            <div class="grid grid-cols-4 gap-5 mt-5">
                <div
                    v-for="emoji in emojis"
                    :key="emoji"
                    class="relative w-full bg-white rounded shadow-2xl pb-full"
                >
                    <span
                        class="absolute inset-0 flex items-center justify-center text-xl md:text-3xl"
                    >
                        {{ emoji }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeSearch",

    data() {
        return {
            emojis: ["🎄", "⛱️", "🎁", "🎀"],
        };
    },
};
</script>

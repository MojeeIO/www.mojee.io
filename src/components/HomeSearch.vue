<template>
    <div
        class="flex flex-col max-w-screen-xl mx-auto mb-40 md:flex-row md:items-center md:pt-16"
    >
        <div class="md:pr-20 md:w-1/2">
            <h2 class="text-2xl font-extrabold text-gray-900 md:text-3xl">
                Search Emojis...
            </h2>
            <p class="max-w-md mt-4">
                <span class="font-bold text-gray-900">Mojee.io</span>
                is a great tool for searching emojis. We provide a convenient
                <g-link class="link" to="/">search tool</g-link>
                where you can view and copy emojis.
            </p>
        </div>

        <div class="mt-8 md:w-1/2">
            <div class="max-w-xl">
                <div
                    class="flex items-center w-full px-4 bg-white rounded shadow-2xl h-15"
                >
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

<template>
    <div
        class="items-center max-w-screen-xl pt-10 mx-auto md:grid md:grid-cols-2 md:gap-8 lg:gap-24 xl:gap-32"
    >
        <div class="order-2">
            <h2
                class="text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl"
            >
                Simple, semantic API
            </h2>
            <p class="mt-4">
                Mojee provides a semantic API for .NET and TypeScript. These are
                just a few examples. You can learn more reading the
                <a class="link" href="https://docs.mojee.io/">
                    <span>docs</span>
                </a>
                .
            </p>
        </div>

        <div class="relative flex items-center order-3 md:order-1">
            <div class="w-full mt-8 md:absolute">
                <m-tabs
                    class="w-full bg-gray-800 rounded api-tabs"
                    nav-classes="bg-gray-700 rounded-t flex overflow-hidden text-gray-300"
                    nav-item-classes=" flex items-center h-15 text-sm px-8 hover:text-white transition-colors ease-in duration-150"
                    nav-item-active-classes="bg-gray-800 text-white"
                    tab-content-classes="px-8 py-4 text-gray-300"
                >
                    <m-tab label=".NET" visible>
                        <pre v-highlight:cs>
<code>// 1. Replace all shortcodes with an emoji
Mojee.Replace("Hello, world :smile:");
// Hello, world 😄

// 2. Search for emojis
Mojee.Search("smile").ToList()
     .ForEach(emoji => Console.Write(emoji));
// 😄 😸 😃 😺 😅

// 3. Get an emoji
var emoji = Emoji.Get("smile");
Console.Write($"{emoji.Shortcode}: {emoji}");
// smile: 😄</code>
</pre>
                    </m-tab>

                    <m-tab
                        label="<div class='flex items-center'><div>TypeScript</div><div class='relative flex items-center h-6 px-2 ml-4 text-xs text-white bg-gray-500 rounded-xs'>Coming soon</div></div>"
                    >
                        <pre v-highlight:ts>
<code>// 1. Replace all shortcodes with an emoji
Mojee.replace("Hello, world :smile:");
// Hello, world 😄

// 2. Search for emojis
Mojee.search("smile")
     .forEach(emoji => console.log(emoji.character));
// 😄 😸 😃 😺 😅

// 3. Get an emoji
const emoji = Emoji.get("smile");
console.log(`${emoji.shortcode}: ${emoji.character}`);
// smile: 😄</code>
</pre>
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
    </div>
</template>

<script>
export default {
    name: "HomeFeatureApi",
};
</script>

<style scoped>
.api-tabs {
    pre[class*="language-"] {
        @apply px-0 py-5 m-0;
    }
}
</style>

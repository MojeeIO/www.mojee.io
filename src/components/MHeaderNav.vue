<template>
    <nav>
        <ul class="flex items-center">
            <li v-for="item in navItems" :key="item.to">
                <g-link
                    class="inline-flex items-center h-10 px-3 transition-colors duration-150 ease-in rounded-sm hover:text-yellow-800"
                    active-class="text-yellow-800 bg-yellow-100"
                    :to="item.to"
                >
                    {{ item.label }}
                </g-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "HeaderNav",

    data() {
        return {
            navItems: [
                { label: "Home", to: "/" },
                { label: "Emojis", to: "/emojis" },
                { label: "Pricing", to: "/pricing" },
                { label: "Docs", to: "/docs" },
                { label: "Community", to: "https://community.mojee.io" },
            ],
        };
    },
};
</script>

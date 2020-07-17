<template>
    <nav>
        <ul class="flex items-center justify-center h-16">
            <li v-for="item in $static.metadata.siteNav" :key="item.to">
                <g-link
                    class="inline-flex items-center px-1 text-sm transition-colors duration-150 ease-in rounded-sm sm:px-3 hover:text-yellow-600"
                    :to="item.to"
                >
                    {{ item.label }}
                </g-link>
            </li>
        </ul>
    </nav>
</template>

<static-query>
query {
    metadata {
        siteNav {
            to
            label
        }
    }
}
</static-query>

<script>
export default {
    name: "MFooterNav",
};
</script>

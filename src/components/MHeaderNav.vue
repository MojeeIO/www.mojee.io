<template>
    <nav>
        <ul class="flex items-center">
            <li v-for="item in $static.metadata.siteNav" :key="item.to">
                <g-link
                    class="inline-flex items-center h-10 px-3 transition-colors duration-150 ease-in rounded-sm hover:text-yellow-600"
                    exact-active-class="text-yellow-700 bg-yellow-100 hover:text-yellow-700"
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
    name: "MHeaderNav",
};
</script>

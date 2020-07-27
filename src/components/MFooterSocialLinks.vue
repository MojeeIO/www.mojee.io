<template>
    <ul class="flex items-center justify-center h-16">
        <li
            v-for="link in $static.metadata.social"
            :key="link.id"
            class="ml-3 transition-colors duration-150 ease-in hover:text-yellow-600"
        >
            <a v-if="link.id === 'email'" :href="`mailto:${link.value}`">
                <m-icon width="32" height="32"><m-icon-envelope /></m-icon>
            </a>

            <a
                v-if="link.id === 'twitter'"
                :href="`https://twitter.com/${link.value}`"
            >
                <m-icon width="32" height="32"><m-icon-twitter /></m-icon>
            </a>

            <a
                v-if="link.id === 'instagram'"
                :href="`https://instagram.com/${link.value}`"
            >
                <m-icon width="32" height="32"><m-icon-instagram /></m-icon>
            </a>
        </li>
    </ul>
</template>

<static-query>
query {
    metadata {
        social {
            id
            value
        }
    }
}
</static-query>

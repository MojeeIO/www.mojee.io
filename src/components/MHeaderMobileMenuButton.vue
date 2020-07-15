<template>
    <button @click="$emit('click')">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            overflow="visible"
        >
            <path
                v-if="isMobileMenuOpen"
                d="M13.41 12l4.11-4.11c.27-.27.17-.8-.23-1.19-.39-.39-.92-.49-1.19-.22L12 10.59 7.89 6.47c-.27-.26-.8-.16-1.19.23-.39.39-.49.92-.23 1.19L10.59 12l-4.11 4.11c-.27.27-.17.8.23 1.19.39.39.92.49 1.19.22l4.1-4.11 4.11 4.11c.27.27.8.17 1.19-.22.39-.39.49-.92.23-1.19L13.41 12z"
            />

            <path
                v-else
                d="M21.09 8H2.91C2.41 8 2 7.55 2 7s.41-1 .91-1h18.18c.5 0 .91.45.91 1s-.41 1-.91 1zM21.09 13H2.91c-.5 0-.91-.45-.91-1s.41-1 .91-1h18.18c.5 0 .91.45.91 1s-.41 1-.91 1zM21.09 18H2.91c-.5 0-.91-.45-.91-1s.41-1 .91-1h18.18c.5 0 .91.45.91 1s-.41 1-.91 1z"
            />
            <path fill="none" d="M0 0h24v24H0z" />
        </svg>
    </button>
</template>

<script>
export default {
    name: "MHeaderMobileMenuButton",

    props: {
        isMobileMenuOpen: Boolean,
    },
};
</script>

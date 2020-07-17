<template>
    <footer
        class="flex flex-col-reverse max-w-screen-xl py-12 mx-auto mt-10 lg:flex-row lg:justify-between md:py-16"
    >
        <div class="flex items-center justify-center h-16 text-xs">
            <m-footer-logo />
            <span class="w-px h-6 mx-4 bg-gray-700"></span>
            &copy; {{ year }} Object.NET, Inc.
        </div>

        <m-footer-nav />

        <m-footer-social-links />
    </footer>
</template>

<script>
import MFooterLogo from "./MFooterLogo";
import MFooterNav from "./MFooterNav";
import MFooterSocialLinks from "./MFooterSocialLinks";

export default {
    name: "MFooter",

    components: {
        MFooterLogo,
        MFooterNav,
        MFooterSocialLinks,
    },

    computed: {
        year() {
            return new Date().getFullYear();
        },
    },
};
</script>

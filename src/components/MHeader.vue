<template>
    <header
        class="sticky top-0 z-10 flex items-center h-16 px-6 -mx-6 bg-white md:relative"
    >
        <g-link class="relative z-40" to="/"><m-header-logo /></g-link>

        <div class="items-center hidden w-full h-full md:flex">
            <m-header-nav class="ml-12" />

            <a
                class="ml-auto btn btn-yellow btn-sm"
                href="https://github.com/MojeeIO/mojee"
            >
                Download
            </a>
        </div>

        <m-header-mobile-menu-button
            class="absolute right-0 z-40 flex items-center justify-center flex-shrink-0 w-10 h-10 ml-auto mr-6 bg-white bg-opacity-50 rounded-full shadow-md focus:outline-none md:hidden"
            :isMobileMenuOpen="isMobileMenuOpen"
            @click="toggleMenu"
        />

        <div
            class="fixed top-0 right-0 w-10 h-10 -mt-12 -mr-10 transition-all duration-300 transform bg-yellow-300 rounded-full md:hidden"
            :style="mobileMenuBgStyles"
        ></div>

        <m-header-nav-mobile
            class="z-30 md:hidden"
            :isMobileMenuOpen="isMobileMenuOpen"
            @link-click="isMobileMenuOpen = false"
        />
    </header>
</template>

<script>
import MHeaderLogo from "./MHeaderLogo";
import MHeaderNav from "./MHeaderNav";
import MButton from "./MButton";
import MHeaderMobileMenuButton from "./MHeaderMobileMenuButton";
import MHeaderNavMobile from "./MHeaderNavMobile";

export default {
    name: "MHeader",

    components: {
        MHeaderLogo,
        MHeaderNav,
        MHeaderNavMobile,
        MButton,
        MHeaderMobileMenuButton,
    },

    data() {
        return {
            isMobileMenuOpen: false,
        };
    },

    computed: {
        mobileMenuBgClass() {
            return this.isMobileMenuOpen ? "bg-gray-900" : "bg-white";
        },

        mobileMenuBgStyles() {
            return this.isMobileMenuOpen
                ? "transform: scale(2); width: 100vmax; height: 100vmax"
                : "";
        },
    },

    methods: {
        toggleMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        },
    },
};
</script>

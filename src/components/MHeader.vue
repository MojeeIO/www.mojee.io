<template>
    <header class="flex items-center h-16">
        <g-link to="/"><m-header-logo /></g-link>

        <m-header-nav class="ml-12" />

        <m-button class="ml-auto" size="sm">Download</m-button>
    </header>
</template>

<script>
import MHeaderLogo from "./MHeaderLogo";
import MHeaderNav from "./MHeaderNav";
import MButton from "./MButton";

export default {
    name: "Header",

    components: {
        MHeaderLogo,
        MHeaderNav,
        MButton,
    },
};
</script>

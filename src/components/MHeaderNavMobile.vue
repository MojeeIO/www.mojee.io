<template>
    <nav
        class="fixed flex items-center justify-center"
        :class="{ 'inset-0': isMobileMenuOpen }"
    >
        <div>
            <transition-group
                tag="ul"
                enter-active-class="transition-all duration-300 ease-in transform"
                enter-class="translate-y-2 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
            >
                <li
                    v-for="item in $static.metadata.siteNav"
                    :key="item.to"
                    v-if="isMobileMenuOpen"
                >
                    <g-link
                        class="flex items-center justify-center text-2xl font-extrabold text-yellow-700 h-15"
                        active-class="text-yellow-800 bg-yellow-200 rounded-md"
                        :to="item.to"
                    >
                        {{ item.label }}
                    </g-link>
                </li>
            </transition-group>

            <transition
                enter-active-class="transition-all duration-300 ease-in delay-100"
                enter-class="opacity-0"
                enter-to-class="opacity-100"
            >
                <m-button v-if="isMobileMenuOpen" class="w-full mt-6 ml-auto">
                    Download
                </m-button>
            </transition>
        </div>
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
    name: "MHeaderNavMobile",

    props: {
        isMobileMenuOpen: Boolean,
    },
};
</script>

<template>
    <nav
        class="fixed flex items-center justify-center"
        :class="{ 'inset-0': isMobileMenuOpen }"
    >
        <div>
            <transition-group
                tag="ul"
                enter-active-class="transition-all duration-300 ease-in transform"
                leave-active-class="hidden"
                enter-class="translate-y-2 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
            >
                <li
                    v-for="item in $static.metadata.siteNav"
                    :key="item.to"
                    v-if="isMobileMenuOpen"
                    @click="$emit('link-click')"
                >
                    <g-link
                        class="flex items-center justify-center text-2xl font-extrabold text-yellow-700 h-15"
                        exact-active-class="text-yellow-800 bg-yellow-200 rounded-md"
                        :to="item.to"
                    >
                        {{ item.label }}
                    </g-link>
                </li>
            </transition-group>

            <transition
                enter-active-class="transition-all duration-300 ease-in delay-100"
                leave-active-class="hidden"
                enter-class="opacity-0"
                enter-to-class="opacity-100"
            >
                <div v-if="isMobileMenuOpen">
                    <a
                        class="w-full mt-6 ml-auto btn btn-yellow btn-md"
                        href="https://github.com/MojeeIO/mojee"
                    >
                        Download
                    </a>
                </div>
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

<template>
    <div>
        <ul :class="navClasses">
            <li v-for="(tabItem, index) in tabItems" :key="index">
                <a
                    :class="[
                        navItemClasses,
                        index === activeIndex ? navItemActiveClasses : '',
                    ]"
                    href
                    @click.prevent="onTabClick(index)"
                >
                    {{ tabItem.label }}
                </a>
            </li>
        </ul>

        <div :class="tabContentClasses">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "MTabs",

    props: {
        navClasses: String,
        navItemClasses: String,
        navItemActiveClasses: String,
        tabContentClasses: String,
    },

    data() {
        return {
            activeIndex: 0,
            tabItems: [],
        };
    },

    computed: {
        activeClasses() {
            return this.i;
        },
    },

    mounted() {
        if (this.$slots.default && this.$slots.default.length) {
            this.tabItems = this.$slots.default
                .filter(
                    (vnode) =>
                        vnode.componentInstance &&
                        vnode.componentInstance.$data &&
                        vnode.componentInstance.$data.isTabItem,
                )
                .map((vnode) => vnode.componentInstance);
        }
    },

    methods: {
        onTabClick(index) {
            this.setActiveIndex(index);
            this.$emit("select", index);
        },

        setActiveIndex(index) {
            this.activeIndex = index;
            this.tabItems.forEach(
                (tabItem, idx) => (tabItem.isActive = index === idx),
            );
        },
    },
};
</script>

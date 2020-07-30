<template>
    <div
        ref="drawer"
        tabindex="-1"
        class="fixed z-40 transition duration-200 ease-in-out transform bg-white focus:outline-none"
        :class="[rootClasses, transformClasses]"
        @keydown.esc="hide"
    >
        <slot />

        <portal to="overlay">
            <m-overlay
                :is-open="isOpen"
                @swipe-left="placement === 'left' && hide()"
                @swipe-right="placement === 'right' && hide()"
                @swipe-down="placement === 'bottom' && hide()"
                @swipe-up="placement === 'top' && hide()"
                @click="hide"
            />
        </portal>
    </div>
</template>

<script>
export default {
    name: "MDrawer",

    props: {
        value: Boolean,

        placement: {
            type: String,
            default: "bottom",
        },

        sizeClass: String,
    },

    data() {
        return {
            isOpen: this.value,
        };
    },

    computed: {
        rootClasses() {
            switch (this.placement) {
                case "top":
                    return [
                        "top-0 left-0 right-0 rounded-b-lg",
                        this.sizeClass || "h-auto",
                    ];

                case "right":
                    return [
                        "right-0 top-0 bottom-0 rounded-l-lg",
                        this.sizeClass || "w-auto",
                    ];

                case "bottom":
                    return [
                        "bottom-0 left-0 right-0 rounded-t-lg",
                        this.sizeClass || "h-auto",
                    ];

                case "left":
                    return [
                        "left-0 top-0 bottom-0 rounded-r-lg",
                        this.sizeClass || "w-auto",
                    ];
            }
        },

        transformClasses() {
            switch (this.placement) {
                case "top":
                    return this.isOpen ? "translate-y-0" : "-translate-y-full";
                case "right":
                    return this.isOpen ? "translate-x-0" : "translate-x-full";
                case "bottom":
                    return this.isOpen ? "translate-y-0" : "translate-y-full";
                case "left":
                    return this.isOpen ? "translate-x-0" : "-translate-x-full";
            }
        },
    },

    watch: {
        value: {
            handler: function (val) {
                this.isOpen = val;

                this.$nextTick(() => {
                    this.$refs.drawer && this.$refs.drawer.focus();
                });
            },

            immediate: true,
        },

        isOpen(val) {
            this.$emit("input", val);

            this.$emit(val ? "show" : "hide");
        },
    },

    methods: {
        hide() {
            this.isOpen = false;
        },
    },
};
</script>

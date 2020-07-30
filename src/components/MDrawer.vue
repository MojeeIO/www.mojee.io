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
                @swipe-left="() => placement === 'left' && hide()"
                @swipe-right="() => placement === 'right' && hide()"
                @swipe-down="() => placement === 'bottom' && hide()"
                @swipe-up="() => placement === 'top' && hide()"
                @click="hide"
            />
        </portal>

        <button
            class="absolute flex items-center justify-center w-10 h-10 top-5 right-5 focus:outline-none"
            @click="hide"
        >
            <m-icon width="24" height="24">
                <m-icon-close />
            </m-icon>
        </button>
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
            rootClasses: "",
        };
    },

    computed: {
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

    beforeMount() {
        this.setClasses();
    },

    methods: {
        hide() {
            this.isOpen = false;
        },

        setClasses() {
            switch (this.placement) {
                case "top":
                    this.rootClasses = [
                        "top-0 left-0 right-0 rounded-b-lg",
                        this.sizeClass || "h-auto",
                    ];

                    break;

                case "right":
                    this.rootClasses = [
                        "right-0 top-0 bottom-0 rounded-l-lg",
                        this.sizeClass || "w-auto",
                    ];

                    break;

                case "bottom":
                    this.rootClasses = [
                        "bottom-0 left-0 right-0 rounded-t-lg",
                        this.sizeClass || "h-auto",
                    ];

                    break;

                case "left":
                    this.rootClasses = [
                        "left-0 top-0 bottom-0 rounded-r-lg",
                        this.sizeClass || "w-auto",
                    ];
            }
        },
    },
};
</script>

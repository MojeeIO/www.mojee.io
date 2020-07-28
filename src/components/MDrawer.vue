<template>
    <div
        class="fixed z-40 transition duration-200 ease-in-out transform bg-white"
        :class="[rootClasses, transformClasses]"
    >
        <slot />

        <portal to="overlay">
            <m-overlay :is-open="isOpen" @swipe-left="hide" @click="hide" />
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
            transformClasses: "",
        };
    },

    computed: {
        rootClasses() {
            switch (this.placement) {
                case "bottom":
                    return [
                        "bottom-0 left-0 right-0 rounded-t-lg",
                        this.sizeClass || "h-auto",
                    ];
            }
        },
    },

    watch: {
        value: {
            handler: function (val) {
                this.isOpen = val;

                this.transformClasses =
                    this.placement === "bottom" && val
                        ? "translate-y-0"
                        : "translate-y-full";
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

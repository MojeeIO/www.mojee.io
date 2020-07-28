<template>
    <div
        class="fixed z-30 transition-opacity duration-300 ease-in-out bg-gray-600"
        :class="isOpen ? 'inset-0 opacity-50 dark:bg-opacity-75' : 'opacity-0'"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
        @click="onClick"
    ></div>
</template>

<script>
import { store } from "../store";
import bodyScroll from "../mixins/bodyScroll";

export default {
    name: "MOverlay",

    mixins: [bodyScroll],

    props: {
        isOpen: Boolean,
    },

    data() {
        return {
            touchStart: {
                x: 0,
                y: 0,
            },
        };
    },

    watch: {
        isOpen(open) {
            if (open) {
                this.disableBodyScroll();
            } else {
                this.enableBodyScroll();
            }
        },
    },

    methods: {
        onTouchStart(e) {
            this.touchStart.x = e.changedTouches[0].clientX;
            this.touchStart.y = e.changedTouches[0].clientY;
        },

        onTouchEnd(e) {
            const dx = e.changedTouches[0].clientX - this.touchStart.x;
            const dy = e.changedTouches[0].clientY - this.touchStart.y;

            // Is it a horizontal swipe with min 40px distance?
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
                if (dx < 0) {
                    this.$emit("swipe-left");
                }

                if (dx > 0) {
                    this.$emit("swipe-right");
                }
            }

            // Is it a vertical swipe with min 40px distance?
            if (Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 40) {
                if (dy < 0) {
                    this.$emit("swipe-up");
                }

                if (dy > 0) {
                    this.$emit("swipe-down");
                }
            }
        },

        onClick(e) {
            this.$emit("click");
        },
    },
};
</script>

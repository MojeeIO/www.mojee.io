<template>
    <div>
        <slot />
    </div>
</template>

<script>
export default {
    name: "MIntersect",
    props: {
        root: {
            default: null,
        },
        rootMargin: {
            type: String,
            default: "0px",
        },
        threshold: {
            type: [Number, Array],
            default: 0,
        },
    },
    data() {
        return {
            observer: null,
        };
    },
    mounted() {
        this.observer = new IntersectionObserver(
            ([entry]) => {
                if (entry && entry.isIntersecting) {
                    this.$emit("enter", entry);
                } else {
                    this.$emit("leave", entry);
                }
            },
            {
                root: this.root,
                rootMargin: this.rootMargin,
                threshold: this.threshold,
            },
        );
        this.observer.observe(this.$el);
    },
    beforeDestroy() {
        this.observer.disconnect();
    },
};
</script>

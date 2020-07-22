<template>
    <div
        :id="id"
        class="px-6 bg-white"
        :class="{ 'relative rounded bg-blue-100': isOpen }"
    >
        <div
            class="flex pt-6 pb-3 transition-colors duration-150 ease-in cursor-pointer hover:text-blue-500"
            :class="isOpen ? 'text-blue-500' : 'text-gray-900'"
            @click="toggle"
        >
            <m-icon
                class="flex-shrink-0 mt-2"
                :class="{ 'rotate-45 transform': isOpen }"
            >
                <m-icon-plus />
            </m-icon>

            <h4 class="ml-3 text-lg font-medium">{{ question }}</h4>
        </div>

        <div v-show="isOpen" class="pb-6 pl-8"><slot /></div>
    </div>
</template>

<script>
export default {
    name: "PricingFaqItem",

    props: {
        id: {
            type: String,
            required: true,
        },

        question: {
            type: String,
            required: true,
        },

        active: Boolean,
    },

    computed: {
        isOpen: {
            get: function () {
                return this.$parent.$data.faqItems[this.id];
            },

            set: function () {
                this.$parent.$data.faqItems[this.id] = !this.$parent.$data
                    .faqItems[this.id];
            },
        },
    },

    mounted() {
        this.$set(this.$parent.$data.faqItems, this.id, this.active);

        if (this.$route.hash && this.$route.hash === `#${this.id}`) {
            this.toggle();

            setTimeout(() => {
                this.scrollToQuestion();
            }, 200);
        }
    },

    methods: {
        toggle() {
            this.isOpen = !this.isOpen;

            Object.keys(this.$parent.$data.faqItems).forEach((key) => {
                if (key !== this.id) {
                    this.$parent.$data.faqItems[key] = false;
                }
            });
        },

        scrollToQuestion() {
            const y =
                document.querySelector(`#${this.id}`).getBoundingClientRect()
                    .top + window.scrollY;

            window.scroll({
                top: y,
                behavior: "smooth",
            });
        },
    },
};
</script>

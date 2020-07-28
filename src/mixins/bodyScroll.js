export default {
    data() {
        return {
            bodyWidth: 0,
            scrollTop: 0,
            isBodyScrollDisabled: false,
        };
    },

    mounted() {
        window.addEventListener("resize", this.setBodyWidth);
    },

    beforeDestroy() {
        window.removeEventListener("resize", this.setBodyWidth);
    },

    methods: {
        disableBodyScroll() {
            this.setBodyWidth();

            if (!this.isBodyScrollDisabled) {
                const { body } = document;

                this.scrollTop = window.scrollY;

                body.style.width = `${this.bodyWidth}px`;
                body.style.top = `${-this.scrollTop}px`;
                body.classList.add("overflow-hidden", "fixed");

                this.isBodyScrollDisabled = true;
            }
        },

        enableBodyScroll() {
            if (this.isBodyScrollDisabled) {
                const { body } = document;

                body.classList.remove("overflow-hidden", "fixed");
                body.style.width = "";
                body.style.top = "";

                window.scrollTo(0, this.scrollTop);

                this.isBodyScrollDisabled = false;
            }
        },

        setBodyWidth() {
            this.bodyWidth = document.body.offsetWidth;
        },
    },
};

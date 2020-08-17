<script>
export default {
    functional: true,

    name: "MEmoji",

    props: {
        emoji: {
            type: Object,
            default: () => ({
                id: "",
            }),
        },
    },

    render: (h, { data, props }) => {
        const emojiHtml = props.emoji.id
            ? `&\#x${props.emoji.id.replace(/-/g, "&\#x")}`
            : "";

        return h("div", {
            ref: data.ref,
            class: [data.staticClass, "m-emoji"],
            domProps: { innerHTML: emojiHtml },
        });
    },
};
</script>

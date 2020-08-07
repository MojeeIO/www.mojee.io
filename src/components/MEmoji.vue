<script>
export default {
    functional: true,

    name: "MEmoji",

    props: {
        emoji: {
            type: Object,
            default: () => ({
                unicode: "",
            }),
        },
    },

    render: (h, { data, props }) => {
        const emojiHtml = props.emoji.unicode
            ? `&\#x${props.emoji.unicode.replace(/-/g, "&\#x")}`
            : "";

        return h("div", {
            ref: data.ref,
            class: [data.staticClass, "m-emoji"],
            domProps: { innerHTML: emojiHtml },
        });
    },
};
</script>

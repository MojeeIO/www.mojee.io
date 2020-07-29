<script>
export default {
    functional: true,

    name: "MEmoji",

    props: {
        emoji: {
            type: Object,
            default: () => ({
                unicode: "",
                shortcode: "",
            }),
        },
        hasTooltip: {
            type: Boolean,
            default: false,
        },
    },

    render: (h, { data, props }) => {
        const emojiHtml = props.emoji.unicode
            ? `&\#x${props.emoji.unicode.replace(/-/g, "&\#x")}`
            : "";

        const shortcode = props.emoji ? props.emoji.shortcode : "";

        const buildEmojiDiv = () => {
            const content = [];

            content.push(
                h("div", {
                    ref: data.ref,
                    class: [data.staticClass, "m-emoji"],
                    domProps: { innerHTML: emojiHtml },
                }),
            );
            console.log(props.hasTooltip);
            if (props.hasTooltip) {
                content.push(
                    h(
                        "span",
                        { class: "text-xs font-mono" },
                        `:${props.emoji.shortcode}:`,
                    ),
                );
            }

            return content;
        };

        const content = buildEmojiDiv();

        return h("div", content);
    },
};
</script>

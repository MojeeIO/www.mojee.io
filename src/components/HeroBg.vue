<template>
    <div style="max-width: 769px;">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 769 667"
            overflow="visible"
        >
            <path
                :fill="color"
                d="M68.6 0S2.77 79 .08 179s61.8 119 78.1 321C91.1 660.09 182.34 702.13 393.07 639c176.9-53 376.02-54 376.02-54V0H68.6z"
            />
        </svg>
    </div>
</template>

<script>
export default {
    name: "HeroBg",

    props: {
        color: {
            type: String,
            default: "#fff2d9",
        },
    },
};
</script>

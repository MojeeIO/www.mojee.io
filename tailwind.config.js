module.exports = {
    purge: false,
    theme: {
        colors: {
            transparent: "transparent",
            black: "#000",
            white: "#fff",

            gray: {
                100: "#f4f4f9",
                200: "#e1e1ea",
                300: "#c0c0cc",
                400: "#7e7e8c",
                500: "#656572",
                600: "#525260",
                700: "#434351",
                800: "#2d2d3a",
                900: "#1f1f26",
            },
            yellow: {
                100: "#fff7e9",
                200: "#fff2d9",
                300: "#ffe0b3",
                400: "#ffd085",
                500: "#fdbc41",
                600: "#f59e27",
                700: "#e28807",
                800: "#a55600",
                900: "#844b07",
            },
            blue: {
                100: "#e8f3ff",
                200: "#badbff",
                300: "#75b8ff",
                400: "#36a0ff",
                500: "#1989ff",
                600: "#007ff2",
                700: "#005dcc",
                800: "#0958b7",
                900: "#00519b",
            },
            green: {
                100: "#e1f5ed",
                200: "#bef4dd",
                300: "#7cd6b1",
                400: "#6acca6",
                500: "#41aa84",
                600: "#329b73",
                700: "#258e63",
                800: "#1b7f52",
                900: "#02603e",
            },
            red: {
                100: "#ffebeb",
                200: "#ffc7c7",
                300: "#ff9f9f",
                400: "#fd7777",
                500: "#fc5656",
                600: "#f73e3e",
                700: "#f91c1c",
                800: "#d60909",
                900: "#ad0707",
            },
        },

        fontSize: {
            xs: ["0.875rem", "1.6"],
            sm: ["1rem", "1.6"],
            base: ["1.125rem", "1.6"],
            lg: ["1.25rem", "1.6"],
            xl: ["1.5rem", "1.4"],
            "2xl": ["1.875rem", "1.4"],
            "3xl": ["2.25rem", "1.4"],
            "4xl": ["3rem", "1.3"],
            "5xl": ["3.5rem", "1.2"],
            "6xl": ["3.75rem", "1.2"],
            "8xl": ["4.5rem", "1.1"],
        },

        fontWeight: {
            normal: "400",
            medium: "500",
            bold: "700",
            extrabold: "800",
        },

        spacing: {
            full: "100%",
            px: "1px",
            "1/2": "50%",
            "1/4": "25%",
            "0": "0",
            "0.5": "0.125rem",
            "1": "0.25rem",
            "2": "0.5rem",
            "3": "0.75rem",
            "4": "1rem",
            "5": "1.25rem",
            "6": "1.5rem",
            "8": "2rem",
            "10": "2.5rem",
            "12": "3rem",
            "15": "3.75rem",
            "16": "4rem",
            "20": "5rem",
            "24": "6rem",
            "32": "8rem",
            "40": "10rem",
            "48": "12rem",
            "56": "14rem",
            "64": "16rem",
            "72": "18rem",
        },

        inset: (theme) => ({
            ...theme("spacing"),
        }),

        // 8, 12, 16, 32
        borderRadius: {
            none: "0",
            sm: "0.5rem",
            default: "0.75rem",
            md: "1rem",
            lg: "2rem",
            full: "9999px",
        },

        boxShadow: {
            xs: "0 0 0 1px rgba(0, 90, 170, 0.07)",
            sm: "0 1px 2px 0 rgba(0, 90, 170, 0.1)",
            default:
                "0 1px 3px 0 rgba(0, 90, 170, 0.1), 0 1px 2px 0 rgba(0, 90, 170, 0.06)",
            md:
                "0 4px 6px -1px rgba(0, 90, 170, 0.1), 0 2px 4px -1px rgba(0, 90, 170, 0.06)",
            lg:
                "0 10px 15px -3px rgba(0, 90, 170, 0.1), 0 4px 6px -2px rgba(0, 90, 170, 0.05)",
            xl:
                "0 20px 25px -5px rgba(0, 90, 170, 0.1), 0 10px 10px -5px rgba(0, 90, 170, 0.04)",
            "2xl":
                "0 10px 20px -10px rgba(0, 90, 170, 0.10), 0 15px 60px -15px rgba(0, 90, 170, 0.20)",
            inner: "inset 0 2px 4px 0 rgba(0, 90, 170, 0.06)",
            outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
            none: "none",
        },

        extend: {
            fontFamily: {
                body: [
                    "Proxima Nova",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue,Arial",
                    "Noto Sans,sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
            },

            borderWidth: {
                "6": "6px",
            },
        },
    },
    variants: {
        boxShadow: ["responsive", "hover", "focus", "active"],
        translate: ["responsive", "hover", "focus", "active"],
    },
    plugins: [],
};

export default {
    methods: {
        updateRouteQuery({ name, defaultValue, newValue }) {
            const query = {
                ...this.$route.query,
                ...{ [name]: newValue },
            };

            if (newValue === defaultValue) {
                delete query[name];
            }

            this.$router.replace({ ...this.$route, ...{ query } });
        },
    },
};

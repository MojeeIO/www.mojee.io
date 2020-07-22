<template>
    <div>
        <h5 class="mb-4 text-xs text-gray-900">CATEGORY</h5>

        <div v-for="category in categories" :key="category.id" class="mt-1">
            <label class="inline-flex items-center cursor-pointer">
                <input
                    type="radio"
                    :value="category.id"
                    v-model="selected"
                    class="absolute opacity-0"
                />

                <span
                    class="inline-block w-4 h-4 rounded-full"
                    :class="
                        selected === category.id
                            ? 'border-6 border-blue-500'
                            : 'border-2 border-gray-400'
                    "
                ></span>

                <span class="ml-2 text-sm">{{ category.name }}</span>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: "SearchSidebar",

    data() {
        return {
            selected: "all",
            categories: [
                { id: "all", name: "All " },
                { id: "0", name: "Smileys & Emotion " },
                { id: "1", name: "People & Body " },
                { id: "2", name: "Animals & Nature " },
                { id: "3", name: "Food & Drink " },
                { id: "4", name: "Travel & Places " },
                { id: "5", name: "Activities " },
                { id: "6", name: "Objects " },
                { id: "7", name: "Symbols " },
                { id: "8", name: "Flags " },
            ],
        };
    },
};
</script>

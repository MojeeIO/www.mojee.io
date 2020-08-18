const fs = require("fs");
const data = require("./emoji_pretty.json");

const categories = {
    "Smileys & People": 1,
    "Animals & Nature": 2,
    "Food & Drink": 3,
    "Travel & Places": 4,
    "Activities": 5,
    "Objects": 6,
    "Symbols": 7,
    "Flags": 8,
};

const emojis = [];
let temp = {};

for (let i = 0; i < data.length; i++) {
    temp = {
        id: `${data[i].id}`,
        shortcode: `${data[i].shortcode}`,
        category: data[i].category,
    };

    if (data[i].description && data[i].description.length > 0) {
        temp.description = data[i].description;
    }

    if (data[i].tags && data[i].tags.length > 0) {
        if (data[i].tags[0] != "flag") {
            temp.tags = data[i].tags;
        }
    }

    if (data[i].aliases && data[i].aliases.length > 0) {
        temp.aliases = data[i].aliases;
    }

    emojis.push(temp);
}

const searchFn = function (query, options) {
        if (query && query.trim() === "") {
            return this.data;
        }

        const q = query.toLowerCase();
        
        return this.data.filter(
            (emoji) =>
            (
                emoji.shortcode.includes(q) ||
                (emoji.tags    && (emoji.tags.find(t => t.includes(q)) != null)) ||
                (emoji.aliases && (emoji.aliases.find(a => a.includes(q)) != null))
            ) &&
                (options !== undefined && options.category !== 0
                    ? emoji.category === options.category
                    : true),
        );
    };

const fileName = "Mojee.js";
const content = `module.exports = {
    search: ${searchFn},
    data: ${JSON.stringify(emojis)}
}    
`.replace(/"([^"]+)":/g, '$1:');

fs.writeFile(`./data/${fileName}`, content, (err) => {
    if (err) {
        throw new Error(`Error saving ${filename}, Error: ${err}`);
    }

    console.log(`${fileName} saved successfully`);
});

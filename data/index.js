const fs = require("fs");
const data = require("./emoji_pretty.json");

const categories = {
    "Smileys & Emotion": 1,
    "People & Body": 2,
    "Animals & Nature": 3,
    "Food & Drink": 4,
    "Travel & Places": 5,
    Activities: 6,
    Objects: 7,
    Symbols: 8,
    Flags: 9,
};

function buildCategory(categoryName) {
    const result = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].category === categoryName) {
            result.push({
                shortcode: `${data[i].short_name}`,
                unicode: data[i].unified,
                emoticon: data[i].text,
                description: data[i].name,
                category: categories[categoryName],
            });
        }
    }

    // Sort by shortcode
    result.sort((a, b) => {
        var nameA = a.shortcode.toUpperCase();
        var nameB = b.shortcode.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }

        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });

    return result;
}

const emojis = [];

Object.keys(categories).forEach((key) => {
    emojis.push(...buildCategory(key));
});

const searchFn = function (query, options) {
    return this.data.filter(
        (emoji) =>
            emoji.shortcode.includes(query.toLowerCase()) &&
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
`;

fs.writeFile(`./data/${fileName}`, content, (err) => {
    if (err) {
        throw new Error(`Error saving ${filename}, Error: ${err}`);
    }

    console.log(`${fileName} saved successfully`);
});

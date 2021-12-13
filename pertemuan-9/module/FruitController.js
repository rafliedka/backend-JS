/**
 * import fruit dari data.js
 * refactor variabel
 */
const fruits = require("./data");

//buat method index, store, update, destroy
const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

const store = (name) => {
    fruits.push(name);
    index();
};

const update = (position, name) => {
    fruits[position] = name;
    index();
}

const destroy = (position) => {
    fruits.splice(position, 1);
    index();
}

//eksport semua method
module.exports = {index, store, update, destroy};
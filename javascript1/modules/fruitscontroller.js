//meng-import data fruits menggunakan require
const fruits = require("./data");

// membuat fungsi index dan store
const index = () => {
    for (const fruit of fruits){
        console.log(fruit);
    }
};

const store = (name) => {
    fruits.push(name);
    index();
};

//meng-export method index dan store

module.exports = {index, store};
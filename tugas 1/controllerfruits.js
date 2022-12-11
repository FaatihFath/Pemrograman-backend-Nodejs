//meng-import data fruits menggunakan require
const fruits = require("./fruits");

// membuat fungsi index 
function index ()  {
    for (const fruit of fruits){
        console.log(fruit);
    }
};
// membuat fungsi store
function store (name)  {
    fruits.push(name);
    index();
};

// membuat fungsi update
function update (position, name) {
    fruits[position] = name;
}

// membuat fungsi delete
function destroy(position){
    fruits.splice [position, 0];
    index(); 
}

//meng-export method index dan store

module.exports = {index, store, update, destroy};
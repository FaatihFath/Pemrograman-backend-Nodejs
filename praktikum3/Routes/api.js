// import studen controller
const StudentsController = require("../controller/StudentsController.js")

// import express

const express = require("express");

//membuat object router
const router = express.Router();

/**
 * Membuat routing 
 * Method get menerima 2 parameter
 * param 1 adalah endpoint
 * param 2 callback 
 * callback menerima object req dan res
*/
router.get("/", (req, res) => {
    res.send("Hello Express JS");
}); 

router.get("/students", (req, res) => {
    res.send("Menampilkan semua Data student");
});

router.post("/students", (req, res) => {
    res.send("Menambahkan Data student");
});

router.put("/students/:id", (req, res) => {
    const {id} = req.params;
    res.send(`Mengedit Data student ${id}`);
});

router.delete("/students/:id", (req, res) => {
    const {id} = req.params;
    res.send(`Menghapus Data student ${id}`);
});

// export router
module.exports = router;
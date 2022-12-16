// TODO 3: import data Student dari folder data
const students = require("../data/students.js")
    


// membuat class student studentsController
class StudentsController{
    index(res , req ){
        // TODO 4: Tampilkan data students
        const data = {
            massage: "menampilkan data semua students",
            data: [students],
        };
        
        res.json(data);
    }

        store (req, res){
            //TODO 5: tambahkan data students
            students.push(nama);
            const data = {
                message: `menampilkan data students: ${nama}`, 
                data:[students],
            };
            res.json(data);
        }
        update (req, res){
            const {id} = req.params;
            const {nama} = req.body;
            //TODO 6: mengedit data students
            students.id(nama);
            const data = {
                message: `mengedit data students: ${nama}`, 
                data:[students],
            };
            res.json(data);
        }
        destroy (req, res){
            const {id} = req.params;

            //TODO 7: menghapus data students
            students.splice(id,1);
            const data = {
                message: `menghapus data students: ${nama}`, 
                data:[students],
            };
            res.json(data);
        }
        
}
 //Membuat object StudentsController
 const object = new StudentsController();
  
 //Export object StudentsController
 module.exports = object;
const nilai = 93;
let grade =  "";

if (nilai > 90) {
    grade ="A";
} else if (nilai >75) {
    grade = "B";
} else {
    grade = "C";
}

console.log(`Grade Nilai: ${grade}`);

const age = 20;
// if(age > 20){
//     console.log("Sudah Dewasa");
// }else{
//     console.log("Belum Dewasa");
// }

// menggunakan short conditional (ternary operator)

age > 20 ? console.log ("Dewasa") : console.log("belum dewasa");
const persiapan = () => {
    setTimeout(function (){
    console.log("siapkan bahan");
    }, 5000);
};

const merebus = () => {
    setTimeout(function(){
        console.log("Merebus Air..");
    }, 7000);

};

const masak = () => {
    setTimeout(function(){
        console.log("Masak Mie..");
        console.log("selesai masak");
    }, 8000);

};

const main = () => {
    persiapan();
    merebus();
    masak();
};

main();
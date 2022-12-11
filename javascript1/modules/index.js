/**
 * meng-import fruitcontroller
 * melalukan teknik desctructing object
 */

 const { index, store} = require("./controllerfruits")
 const main = () => {
 
     // membuat fungsi utama: main
     index();
     store("pineapple");
 };
 
 main ();
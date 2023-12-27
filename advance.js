//strict mode help catch bugs ;

"use strict";

/*
this will fail it's a future reserved key word for js 
so use strict mode always to help catch bugs 


let private = "12465";
console.log(private);
 */

//function expression vs declaration

/* hello();
function hello() {
  console.log("object -- declaration can be called before declaration 00 ");
}
 */
/* hi();  */
//can't access lexical declaration 'hi' before initialization

//error will be thrown at us

/* let hi = function () {
  console.log("object -- expression can't be called before declaration 11 ");
};
hi(); */




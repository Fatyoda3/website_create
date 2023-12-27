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
/*let add = (a, b) => {
  return a + b;
};

let sub = (a, b) => {
  return a - b;
};

let mul = (a, b) => {
  return a * b;
};

let div = (a, b) => {
  return a / b;
};

let cal4 = function (num0, num1, OperationToPerform) {
  return OperationToPerform(num0, num1);
};

let result = cal4(4, 4, add);
console.log(result);
*/
// no need () if single argument will be passed to the arrow fn

/* let cookin = bool => {
  if (bool) console.log("we cookin hard bruh true  ");
  else{
    console.log("we cookin anyway false");
  }
};
cookin(true);

cookin(false);
 */

// this can be used do write large number 999_999_999_999_999

let cooking = [10, 9, 8, 7, 8_9];

console.table(cooking);

if(cooking)
{
    console.log(true);
}

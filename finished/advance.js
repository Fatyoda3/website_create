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
/* 
let cooking = [10, 9, 8, 7, 8_9];

console.table(cooking);

if(cooking)
{
    console.log(true);
}
 */

// let food = [1,2,23];
/* let name = new Array("HELL ", "IS ", "HERE ")
console.log(name); */

/* const number = [12, 3, 45, 8, 88];

console.log(number, "\n", (number[2] = 17)); */

// we can change inside content of array even when declared with const
// the primitive value stored in an array is mutable
// but the array itself is not so

/* let num = [1, 2, 3, 4, 5];

num = [1, 2, 3, 88];
 */

//number.push(4588); // this works

/* number.push([ 99, 78]);
number.unshift(666); //inserts at starting of the array
console.log(typeof number , number); */

//number.pop();

/* console.log(number); //this works */

/* num.forEach((e) => num.pop()); */

//why it pops twice only ?

/* console.log(num); */

//console.log(number = [1,2,3,48,,85])

/*uncaught TypeError: invalid assignment to const 'number*/
/* let m = [1,2,-3]
 */
//m = m.map(e =>e*2);

//m= m.filter(e=>e>5);
/* 
let j = m.every(e=>e<0);
let jk = m.some((e)=>e<0);

console.log(jk); */

/* let nam = () => console.log(44);

let x = [nam];

x[0]();
 */

/* Object */
/* 
let Person = {
  name: "Shivang",
  age: 18,
  isEmployed: false,
  isTall: true,

  In this case, we've used an arrow function for NewAge(). 
  However, notice that we're accessing Person.age
  directly within the arrow function instead of using this.age
  because arrow functions don't have their own "this" context. 
  Therefore, "Person.age" is explicitly referenced to update
  the age property of the Person object.

  NewAge: () => (Person.age += 1),

  this keyword allows access to attribute of object in methods 
  for the normal function

  newAge0(){
    return this.age+1;
  }
};
 */
/* console.table(Person);

console.log(Person.NewAge());//19
//here age is 19 
//age is ++ bye 1 
console.log(Person.newAge0());//20 */

//loops in js (simple for me but i want a theoretical dive in this things)

/* for (let i = 1; i <= 3; i++) console.log(i, "squared value -->",i ** 2); */
/* 
let ballsObject = {
  name: "hello",
  class: 9,
}; /* [1,2,3,4,5,8,69,78,4,45,4545] */

/*for (let ball in ballsObject) {
  // iterates over the index(array) /key(objects)
  //console.log(ballsObject.ball); this does not work

  console.log(ballsObject[ball]);
}


let balls = [1, 69, 78, 4, 45, 4545];

for (let i = balls.length - 1; i >= 0; i--) console.log(balls[i]);
//basic stuff type conversion which i missed i did it a lot in python

let y = 24;

y = String(y)

console.log(typeof(y))

y =Number(y)

console.log(typeof(y))

let j =  '5';
y += j;

console.log(typeof(y),y);

j+=y;

console.log('j',typeof(j) , j);


j = 'hell';
y = 666;
j+=y;

console.log('nan' , typeof(j)) ;



let y1 = "John";   // y is a string
let x1 =+ y; 

console.log(typeof(x1));
 */



// while loop

/* let isGood = true;
let m = 5;
while(isGood)
{
  console.log(isGood,m,'\n');
  m--;
  if(m<0)
  isGood = false;
} */


/*bad while loop freezes the browser

while(true)
{
  c to exec.
}


*/
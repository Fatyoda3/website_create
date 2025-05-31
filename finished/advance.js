// "use strict";

// let private = "12465";
// console.log(private);

// hello();
// function hello() {
//   console.log("object -- declaration can be called before declaration 00 ");
// }

// hi();
// let hi = function () {
//   console.log("object -- expression can't be called before declaration 11 ");
// };
// hi();

// let add = (a, b) => {
//   return a + b;
// };

// let sub = (a, b) => {
//   return a - b;
// };

// let mul = (a, b) => {
//   return a * b;
// };

// let div = (a, b) => {
//   return a / b;
// };

// let cal4 = function (num0, num1, OperationToPerform) {
//   return OperationToPerform(num0, num1);
// };

// let result = cal4(4, 4, add);
// console.log(result);

// let cookin = bool => {
//   if (bool) console.log("we cookin hard bruh true  ");
//   else{
//     console.log("we cookin anyway false");
//   }
// };
// cookin(true);
// cookin(false);

// let cooking = [10, 9, 8, 7, 8_9];

// console.table(cooking);

// if(cooking)
// {
//     console.log(true);
// }

// let name = new Array("HELL ", "IS ", "HERE ")
// console.log(name);

// const number = [12, 3, 45, 8, 88];

// console.log(number, "\n", (number[2] = 17));

// let num = [1, 2, 3, 4, 5];

// num = [1, 2, 3, 88];

// number.push([ 99, 78]);
// number.unshift(666);
// console.log(typeof number , number);

// console.log(number);

// num.forEach((e) => num.pop());

// console.log(num);

// console.log(number = [1,2,3,48,,85])

// let m = [1,2,-3]

// m = m.map(e =>e*2);

// m= m.filter(e=>e>5);

// let j = m.every(e=>e<0);
// let jk = m.some((e)=>e<0);

// console.log(jk);

// let nam = () => console.log(44);

// let x = [nam];

// x[0]();

// let Person = {
//   name: "Shivang",
//   age: 18,
//   isEmployed: false,
//   isTall: true,

//   NewAge: () => (Person.age += 1),

//   newAge0(){
//     return this.age+1;
//   }
// };

// console.table(Person);

// console.log(Person.NewAge());
// console.log(Person.newAge0());

// for (let i = 1; i <= 3; i++) console.log(i, "squared value -->",i ** 2);

// let ballsObject = {
//   name: "hello",
//   class: 9,
// }; 

// for (let ball in ballsObject) {
//   console.log(ballsObject[ball]);
// }

// let balls = [1, 69, 78, 4, 45, 4545];

// for (let i = balls.length - 1; i >= 0; i--) console.log(balls[i]);

// let y = 24;

// y = String(y)

// console.log(typeof(y))

// y =Number(y)

// console.log(typeof(y))

// let j =  '5';
// y += j;

// console.log(typeof(y),y);

// j+=y;

// console.log('j',typeof(j) , j);

// j = 'hell';
// y = 666;
// j+=y;

// console.log('nan' , typeof(j)) ;

// let y1 = "John";   // y is a string
// let x1 =+ y; 

// console.log(typeof(x1));

// let isGood = true;
// let m = 5;
// while(isGood)
// {
//   console.log(isGood,m,'\n');
//   m--;
//   if(m<0)
//   isGood = false;
// }

// while(true)
// {
//   c to exec.
// }


"use strict"; // Strict mode helps catch bugs early

// Reserved Keywords
/*
let private = "12465"; // Error: 'private' is a future reserved keyword
console.log(private);
*/

// Function Declaration vs Function Expression

// Function Declaration - can be called before it's defined
/*
hello();
function hello() {
  console.log("Function Declaration: Can be called before declaration.");
}
*/

// Function Expression - cannot be called before declaration
/*
hi(); // Error: Cannot access 'hi' before initialization
let hi = function () {
  console.log("Function Expression: Cannot be called before declaration.");
};
hi();
*/

// Arrow Functions & Higher Order Function Example

let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

let calculator = function (num1, num2, operation) {
  return operation(num1, num2);
};

let result = calculator(4, 4, add);
console.log("Addition Result:", result);

// Arrow Function with Single Argument
let cookin = (bool) => {
  if (bool) console.log("We're cookin' hard (true)!");
  else console.log("We're cookin' anyway (false)!");
};

cookin(true);
cookin(false);

// Numeric Separators (for readability)
let cooking = [10, 9, 8, 7, 8_9];
console.table(cooking);

// Arrays and Const
const numbers = [12, 3, 45, 8, 88];
numbers[2] = 17; // Allowed: elements are mutable
numbers.push([99, 78]); // Nested array
numbers.unshift(666); // Add at the beginning
console.log("Modified Numbers Array:", numbers);

// Mutating Array with ForEach
let num = [1, 2, 3, 4, 5];
// num.forEach(() => num.pop()); // Pops only partially (not reliable)
console.log("Original num array:", num);

// Array Methods: map, filter, every, some
let m = [1, 2, -3];
m = m.map((e) => e * 2); // [2, 4, -6]
let allPositive = m.every((e) => e > 0);
let someNegative = m.some((e) => e < 0);
console.log("All Positive?", allPositive, "Any Negative?", someNegative);

// Functions inside Arrays
let logFunc = () => console.log(44);
let x = [logFunc];
x[0](); // Call function stored in array

// Object with Methods

let Person = {
  name: "Shivang",
  age: 18,
  isEmployed: false,
  isTall: true,

  // Arrow function does not use its own 'this'
  NewAge: () => (Person.age += 1),

  // Regular function uses 'this' properly
  newAge0() {
    return this.age + 1;
  },
};

console.table(Person);
console.log("New Age using arrow:", Person.NewAge()); // Modifies age
console.log("New Age using 'this':", Person.newAge0()); // Adds 1

// Loops

// For Loop
for (let i = 1; i <= 3; i++) {
  console.log(i, "squared value -->", i ** 2);
}

// For-in Loop (for object keys)
let ballsObject = {
  name: "hello",
  class: 9,
};

for (let key in ballsObject) {
  console.log("Key:", key, "Value:", ballsObject[key]);
}

// For Loop in Reverse (for arrays)
let balls = [1, 69, 78, 4, 45, 4545];
for (let i = balls.length - 1; i >= 0; i--) {
  console.log("Reversed Ball:", balls[i]);
}

// Type Conversion

let y = 24;
y = String(y); // Number to String
console.log(typeof y); // string

y = Number(y); // String to Number
console.log(typeof y); // number

let j = "5";
y += j; // 'number' + 'string' = string
console.log("y:", typeof y, y);

j += y; // string concatenation
console.log("j:", typeof j, j);

j = "hell";
y = 666;
j += y; // "hell666"
console.log("j is now:", typeof j, j);

let y1 = "John";
let x1 = +y1; // NaN (invalid number)
console.log("x1 type:", typeof x1, x1);

// While Loop
let isGood = true;
let mCount = 5;

while (isGood) {
  console.log("Looping:", mCount);
  mCount--;
  if (mCount < 0) isGood = false;
}

// ⚠️ Infinite loop below – don't run this:
/*
while (true) {
  // Will freeze browser
}
*/

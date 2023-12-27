/* let x = [1, 2, 3, 4, 5, 78, 95, 1255, 78, 95, 125]; */

/* let low = 0,
  high = x.length - 1;

let key = 1;
let mid;
 */
/* let bSearch = (key, high, low) => {
  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (x[mid] === key) {
      console.log("yes");
      return mid;
    }

    if (x[mid] > key) {
      high = mid - 1;
    }

    if (x[mid] < key) {
      low = mid + 1;
    }
  }
  return -1;
}; */
/* let bSort = (high, arr) => {
  let temp;

  for (let i = 0; i < high; i++) {
    for (let j = 0; j < high - i; j++) {
      if (arr[j] < arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}; */

/*bSort(high, x);
x.forEach((element) => {
  console.log(element);
});
*/

/* let LinearSearch = (key, high, arr) => {
  for (let i = 0; i < high; i++) {
    if (arr[i] === key) {
      console.log("found ");
      return i;
    }
  }
  return -1;
};
 */
/* let Person = {
  name: "ROHAN",
  age: 20,
  IsEmployed: true,
};
 */
/* console.table(Person);

let child = Object(Person);
child.name = "Jr. ROHAN";
child.age = 8;
child.IsEmployed = false; */
/* 
console.table(child); shift + alt + a to comment a piece of code 
 */

/* let xDouble = x.map(element =>console.log(element));
//(element) => element * 2
//console.table(xDouble);

let xFilter = x.filter(element => element<58)

//console.table(xFilter);

 */

//some

/* let isIntegerArray = x.some((e) => e < 0);
console.log(isIntegerArray);

returns a boolean if some specific condition is met 
 */

//every array method
//every element of the array must meet a specific criteria

/* let isPositiveOnly = x.every((e) => e > 0);

console.log(isPositiveOnly);
 */

/*let Found = x.find((e) => e === 75);

console.log(Found); 5
returns the value if found in the array

also we have findindex
 */

//Case switch in js
/* 
const day = "wed";
let month = 3;
switch (day) {
  case "mon":
    console.log(day);

    break;
  case "tue":
    console.log(day);
    break;
  case "wed":
    console.log(day);
    if (month) {
      console.log(month, "is my lucky month number ! ");
    }
    break;
  case "thu":
    console.log(day);
    break;
  case "fri":
    console.log(day);
    break;
  case "sat":
    console.log(day);
    break;
  case "sun":
    console.log(day);
    break;
  default:
    console.log("not a right day ");
    break;
} */

/*    false.if in a if statement this arguments are passed they take boolean 
value of false
    0 (zero)

    '' or “” (empty string)

    null

    undefined

    NaN

    big INT 0n

    document.all a inbuilt object that has a false value



    code example

    if (false) {
  // Not reachable
}

if (null) {
  // Not reachable
}

if (undefined) {
  // Not reachable
}

if (0) {
  // Not reachable
}

if (-0) {
  // Not reachable
}

if (0n) {
  // Not reachable
}

if (NaN) {
  // Not reachable
}

if ("") {
  // Not reachable
}

    */


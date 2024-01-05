// I am trying to write code in functional programming way
// I think like c code we can do it in js as well
"use strict";

let hello;

let binarySearch;

let LinearSearch;

const main = () => {
  //declaring prototype function at top and creating body at bottom
  let x = [];

  for (let i = 0; i < 10 * 10000 * 1000; i++) x.push(i*2 );

  console.log(binarySearch(x, 4));

  // hello("John");

  console.log(LinearSearch(x, 85));
};

hello = (name) => {
  console.log("hello", name);
};

binarySearch = (array, key) => {
  let mid, //declare and/or initialize the variable here
    low = 0,
    high = array.length - 1;

  while (low <= high) {
    //calculate mid here
    mid = Math.floor((low + high) / 2);

    if (array[mid] == key) return mid; //return the index if found

    if (array[mid] < key) low = mid + 1;
    else high = mid - 1;
  }
  return null; //if element not found return null because -1 not great
};

LinearSearch = (array, key) => {
  let l = array.length;

  for (let i = l; i >= 0; i--) {
    if (array[i] == key) 
    {
      console.log("found the -->", key);
      return i;
    }

  }

  return null;
};

main();

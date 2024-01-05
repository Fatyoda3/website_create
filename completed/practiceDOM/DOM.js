//DOM TRAVERSAL FIRST
'use strict';
const body = document.body;
body.style.backgroundColor = "black";
body.style.color = "orange";

let A_tag_div = document.querySelector("#A__tag"); //a variable value

/* console.log(A_tag_div.childNodes); */

let AnchorTag = document.querySelectorAll("a"); //an array

/* console.log(AnchorTag); */

//accessing element one by one in the array
/* console.log(AnchorTag[0].textContent);
console.log(AnchorTag[1].textContent);
console.log(AnchorTag[2].textContent);
console.log(AnchorTag[4].textContent);
 */
/* 
let sibling = document.querySelector("#B_Sibling");

console.log(sibling.parentNode);

console.log(sibling.nextElementSibling);  */ // returns the tag based element

//console.log(sibling.nextSibling); // return anything next after it
// a way to daisy chain and traverse through the DOM

/* console.log(
  sibling.nextElementSibling.nextElementSibling.nextElementSibling.parentNode
);
 */

/* console.log(sibling.previousSibling);

console.log(sibling.nextElementSibling.textContent); */
/*Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects*/
/* let Animal = {
  isAlive: true,

  eatsFood: true,
};

let rabbit = Object.create(Animal); */ // creates a different object

// let rabbit = new Object(Animal); it mutates(changes the original as well)
/* rabbit.isAlive = false; */

/* console.log(rabbit);

console.log(Animal); */

//DOM modification

/* const AboutP = document.querySelector("#about");

console.log(AboutP);

AboutP.style.color = "transparent";

AboutP.style.backgroundImage =
  "url(https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)";

AboutP.style.backgroundClip = "text";

AboutP.style.backgroundSize = "cover";

AboutP.style.fontSize = "5vw";

AboutP.style.fontWeight = "bolder";
 */

//DOM event listener

let div = document.querySelector("#parent");

div.innerHTML = "<h1>hello this is a h1 heading</h1>";

const button = document.createElement("button");

button.innerText = "click me";

div.append(button);
let change = () => {
  if (body.style.backgroundColor == "white") {
    body.style.backgroundColor = "black";
    return;
  }

  body.style.backgroundColor = "white";
};

button.addEventListener("click", change);

let isBig = false;
let j = document.createElement("h4");
body.appendChild(j);

j.innerHTML = "hello this is h4";

let sizeChange = () => {
  if (!isBig) {
    console.log(true);
    j.innerHTML = "<h3>hello now this is h3</h3>";
    isBig = true;
    return;
  }
  j.innerHTML = "hello this is h4";
  isBig = false;
};
j.addEventListener("mouseover", sizeChange);
// submit on form , mouseover , click ,keypress

let inputField = document.querySelector("#fill");

/* inputField.addEventListener("keypress",(e)=>
{
  e.preventDefault();
console.log(e.key)
j.innerText+=e.key
;}
) */
let ar = [1, 2, 3, 4, 5, 8, 685, 4822];

let len = ar.length;

let sorted = document.querySelector("#sorted");


let BSort = (array, len) => {
  let temp = 0;
  let swapped;
  
  for (let i = 0; i < len; i++) {
    swapped = false;
    
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    
    // If no swaps were made in this pass, the array is sorted
    if (!swapped) {
      break;
    }
  }
  return array;
};



console.log(BSort(ar,len));


sorted.innerHTML = `<h1>${BSort(ar,len)}</h1>`

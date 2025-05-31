"use strict";

// get elements by tag name. returns an array of html collection
/* 
let h1 = document.getElementsByTagName("h1");

//console.log(h1);

// get elements by class name .returns an array of html collection

let mainHeading = document.getElementsByClassName("main__heading");

//console.log("----------\n", mainHeading);

//get element by Id . returns the element node with the id .

let Goal = document.getElementById("Goal");

//console.log(Goal);

//querySelector .returns the first match to the query (. # tagName)

let AnchorTag = document.querySelector("a");

//console.log(AnchorTag);

//querySelectorAll . returns an array consisting of the element node
//elements with same id only give the first element with the id it's unique

// select by class

let AnchorTags = document.querySelectorAll(".name");

//console.log("a", AnchorTags);

/* console.log(
  "the inner text for the 4th node in A tags is --",
  AnchorTags[1].textContent
); */

//select by Id

/*let AnchorTagId = document.querySelectorAll("#name");

//console.log("a with id ", AnchorTagId);

//checking wether the querySelector can handle div.className or div#Id

let divAge = document.querySelectorAll("div.Age");

//console.log(divAge[0].textContent);//it works voila

// DOM traversal

// child Nodes

let PDiv = document.querySelector(".p");
//console.log(PDiv.childNodes);// returns the inner elements  of this div 

let sibling0 = document.querySelector('#sibling0');
//
//                  here we get the empty string 
//                      |\
//console.log(sibling0.nextSibling.nextSibling);
//                                  ||here we get the sibling1


let sibling1 = document.querySelector('#sibling1'); */

//console.log(sibling1.previousSibling.previousSibling);// prev sibling

// better way

//console.log(sibling1.previousElementSibling);
// returns the element with a tag or content

//console.log(sibling0.nextElementSibling);
// returns the element with a tag or content

//-------------------------------******-------------------------------------
// dom element modification
/* 
let paraGraph = document.querySelector("#para");

//console.log(paraGraph.firstElementChild.textContent);//works when targets the div


//appending a tag in the div with class of Para

//paraGraph.innerHTML += '<a href = "#"id = "hello"> raja ji</a>';

//appending a tag in the loremText id based paragraph p tag

paraGraph.innerHTML += '<a href = "#"id = "hell"> raja ji</a>';

//paraGraph.style.color = "hsl(60%,5%,85%)";

paraGraph.style.color = "red";

let hello = document.querySelector("#hello");

hello.style.color = "green";




let mango = document.querySelector('#mango');

//mango gets a class of tasty 
mango.classList.add('tasty');
// mango gets removed 
mango.classList.remove('tasty');
 */

//DOM element creation

// const body = document.body;

/* let div = document.createElement("div");

body.appendChild(div);
div.innerText = "hello world ";
div.style.fontSize = "64px";

//to give id or class to an html element


console.log("class is ", div.className); 
div.classList.add("hell");
div.setAttribute("id", "angel");

/* console.log("id is ", div.id); */
/* let angel = document.querySelector("#angel");

angel.style.boxShadow = "3px 5px 3px orange";

const hell = document.querySelector(".hell");

hell.style.textShadow = "1px 3px 8px red";

const img = document.createElement("img"); */

/* img.src =
  "https://images.pexels.com/photos/19515316/pexels-photo-19515316/free-photo-of-top-view-of-boats-in-the-harbor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

  
img.alt = "image boats ";


 img.setAttribute(
  "src",
  "https://images.pexels.com/photos/19515316/pexels-photo-19515316/free-photo-of-top-view-of-boats-in-the-harbor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
);

img.setAttribute('alt', 'boats ');

div.append(img); 

 let arr = [25,88]

//for each method can call a function over the value of elements in an array

let double = (e) => e*e;
arr.forEach((e)=>console.log(double(e)))
 */

// appendChild insertAdjacentElement

/* const div = document.createElement("div");

div.setAttribute("class", "parent");

body.appendChild(div);

const firstPara = document.createElement("p");

const secPara = document.createElement("p");

firstPara.innerHTML = "hello world this is para one ";

secPara.innerHTML = "hello world this is second";
 */
/* div.appendChild(firstPara);
No control over what get inserted where a linear order is followed 
div.appendChild(secPara); */

//better way

/* div.appendChild(firstPara);
// four methods before(beg , after , after end before

firstPara.insertAdjacentElement("beforebegin", secPara);

const button = document.createElement("button");
button.innerText = "CLICK me ";

body.appendChild(button);
let clicks = 0;

//anonymous function are inside event listener

//es6 way of writing function

button.addEventListener("click", () => {
  console.log("clicked me ");
  clicks++;
  if (clicks >= 10) {
    console.clear();
    clicks = 0;
  }
});

//standard way of writing function in js 


button.addEventListener("click", function () {
  console.log("hello world");
});
 */
/* 
const timeStamp = document.createElement("p");

const form = document.querySelector("#form");

const button = document.querySelector("#btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.timeStamp);
  timeStamp.innerHTML = `<h1>the submission time is ${e.timeStamp} </h1>`;
});

body.appendChild(timeStamp);

const input = document.querySelector("#input");

const text = document.querySelector(".text");

input.addEventListener("keypress", (e) => {
  console.log(e);
  text.textContent += e.key;
});

const heading = document.querySelector('#Goal');

heading.addEventListener("mouseover",()=>{
  heading.style.color = "red";

}) */

const person = {
  name: "raj",
  age: 30,
  isMarried: true,

  ageN: () => {
    console.log((person.age += 1));
    return;
  },
  boolCheck: () => {
    if (person.isMarried) {
      person.isMarried = false;
    }
    console.log(person.isMarried);
    console.log(person.x);
    return;
  },
  x: 42,
};

person.ageN();
person.boolCheck();

let child = {
  isMarried: true,
};

child.boolCheck = person.boolCheck;

child.boolCheck();

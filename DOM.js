"use strict";

// get elements by tag name. returns an array of html collection

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

let AnchorTagId = document.querySelectorAll("#name");

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


let sibling1 = document.querySelector('#sibling1');

//console.log(sibling1.previousSibling.previousSibling);// prev sibling

// better way 

//console.log(sibling1.previousElementSibling);
// returns the element with a tag or content

//console.log(sibling0.nextElementSibling);
// returns the element with a tag or content

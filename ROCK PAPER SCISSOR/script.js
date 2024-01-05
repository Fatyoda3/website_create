"use strict";
///DOM grabbing the elements created in html
let body = document.body;

let field = document.querySelector(".field"); // input field

let Pname = document.querySelector("#P__0"); // Player Name list element dl

let EnterNameLine = document.querySelector("#playerName"); // the context of what the input is for

field.value = ""; //setting input to empty string when reloading the page

let button = document.querySelector("#submit"); //submit player name button

let rock = document.querySelector(".rock"); //rock button

let scissor = document.querySelector(".scissor"); //scissor button

let paper = document.querySelector(".paper"); // paper button

button.addEventListener("click", () => {
  Pname.innerText = "^^" + field.value.toUpperCase() + "^^";

  field.style.display = "none";

  button.style.display = "none";

  EnterNameLine.style.display = "none";
});

body.addEventListener("keypress", (e) => {
  //reset the said elements to original values
  // so name can be changed
  if (e.key == "z" || "Z") {
    // now we account for the capital Z as well
    field.style.display = "";

    button.style.display = "";

    EnterNameLine.style.display = "";
  }
});

//here we add the logic for the game's working
const choices = ["ROCK", "PAPER", "SCISSOR"]; //choiceS THAT PLAYER OR COMPUTER CAN MAKE
let PScore = document.querySelector("#PScore");
let CScore = document.querySelector("#CScore");
var playerScore = 0;
var computerScore = 0;

var winState = document.querySelector(".winState"); //here we will update who won the game
//console.log(typeof(winState));
rock.addEventListener("click", () => {
  // console.log("ROCK");
  let PlayerChoice = "ROCK";
  Game(PlayerChoice);
});

paper.addEventListener("click", () => {
  // console.log("PAPER");
  let PlayerChoice = "PAPER";
  Game(PlayerChoice);
});

scissor.addEventListener("click", () => {
  // console.log("SCISSOR");
  let PlayerChoice = "SCISSOR";
  Game(PlayerChoice);
});

let Game = (choice) => {
  let computerChoice = Math.floor(Math.random() * 3);

  var Computer = choices[computerChoice];

  console.log("player-->", choice);
  console.log("computer -->", Computer);
  // IT'S A TIE
  if (choice == Computer) {
    winState.innerText = "TIE";
  }
  //WHEN WE WIN
  if (
    (choice == "ROCK" && Computer == "SCISSOR") ||
    (choice == "PAPER" && Computer == "ROCK") ||
    (choice == "SCISSOR" && Computer == "PAPER")
  ) {
    playerScore++;
    winState.innerText = "You Win 🦀 ";
    PScore.innerText = playerScore;
  }
  //WHEN WE LOSE
  else if (
    (choice == "SCISSOR" && Computer == "ROCK") ||
    (choice == "ROCK" && Computer == "PAPER") ||
    (choice == "PAPER" && Computer == "SCISSOR")
  ) {
    computerScore++;
    winState.innerText = "You Lose 😢";
    CScore.innerText = computerScore;
  }
};

// the dark theme
var themeButton = document.querySelector(".theme");
let DarkToggle = false;
let hoverOn = document.querySelectorAll(".hoverOn");
let themeChanger = () => {
  // correct logic implemented for this theme changer now to shuffle with the properties
  if (DarkToggle == false) {
    body.style.backgroundColor = "black";
    body.style.transition = "background-color 1s ease-in-out";

    let mainDiv = document.querySelector(".main");
    mainDiv.style.backgroundColor = "grey";
    mainDiv.style.transition = "background-color 0.3s ease-in-out";
    hoverOn.forEach((e) => {
      e.style.boxShadow = "5px 5px 25px white";
      e.style.transition = "box-shadow 1s ease-in-out";
      e.style.transition = "transform 0.3s ease-in-out";
    });
    mainDiv.style.boxShadow = "8px 4px 20px white";

    DarkToggle = true;
    console.log(DarkToggle);
  } else {
    body.style.backgroundColor = "";
    let mainDiv = document.querySelector(".main");
    mainDiv.style.backgroundColor = "";
    mainDiv.style.boxShadow = "";
    DarkToggle = false;
    console.log(DarkToggle);
  }
};

themeButton.addEventListener("click", themeChanger);

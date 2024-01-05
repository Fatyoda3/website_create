/* console.log("we are making ");
console.log("HangMan , tic tac toe , guessTheNumber , treasureKeep ");

//HangMan

let WordList = ["hell", "hello", "angel", "evil"];

let randomNum = Math.floor(Math.random() * WordList.length);

let secretWord = WordList[randomNum];

console.log(WordList[randomNum]);

let difficulty = "easy"; //hard easy

let chance = difficulty == "easy" ? 5 : 10;

console.log(chance);

 for (let i = 0; i <= WordList.length; i++) {
  console.log(secretWord[i], "__");
} 
while (chance > 0) {
  let guessedLetter = prompt("enter the guessed letter : ");
if(guessedLetter in secretWord)
{
    console.log(guessedLetter);
}

} 




let figures = [];

for(let i = 0 ; i<=6 ; i++)
{
    figures.push(document.getElementsByClassName("state")[i])
    console.log(figures[i]);
    
}


 */

/*let heading = document.querySelector(".title_heading h1");

//console.log(heading.textContent);

let headingWord; // this was an array previously

let changeColor = (letter) => {
  letter.style.color = "red";
};

for (let i = 0; i < heading.textContent.split(" ").length; i++) {
  if (i < 1) headingWord = heading.textContent.split(" ");
  //console.log(i);
}
heading.innerHTML = "";
for (let word = 0; word < headingWord.length; word++) {
  console.log(headingWord[word]);
  heading.innerHTML += `<span id= "m${word}"> ${headingWord[word]}</span>`;

  
    let spanElement = document.querySelector(`#m${word}`);
  
    spanElement.addEventListener("mouseover", () => {
      changeColor(spanElement)});
  // headingWord[word].addEventListener("mouseover", changeColor);
} */

let heading = document.querySelector(".title_heading h1");

let headingWords = heading.textContent.split(" ");

let changeColor = (word) => {
  word.style.color = "red";
};

heading.innerHTML = "";

for (let word = 0; word < headingWords.length; word++) {
  let spanElement = document.createElement("span");

  spanElement.textContent = headingWords[word] + " ";

  spanElement.id = `m${word}`;

  spanElement.addEventListener("mouseover", () => {

    changeColor(spanElement);
    
  });

  spanElement.addEventListener("mouseout", () => {

    spanElement.style.color = ""; 

  });

  heading.appendChild(spanElement);

}

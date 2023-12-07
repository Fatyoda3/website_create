const body = document.body;

let buttons = [];
const div = document.createElement("div");

for (let i = 0; i < 5; i++) {
  buttons[i] = document.createElement("button");
  buttons[i].innerText = "hello " + i;

  if (i == 3) div.appendChild(document.createElement("br"));
  
  div.appendChild(buttons[i]);

  buttons[i].style.background = "violet";
}




body.appendChild(div);

div.style.width  = "250px";

div.style.marginLeft = "250px";

div.style.border = " 10px solid orange";


body.style.backgroundColor = "#0e0e00";


console.log("hello world this is testy branch");

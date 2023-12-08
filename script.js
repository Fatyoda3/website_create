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

div.style.width = "250px";

div.style.marginLeft = "250px";

div.style.border = " 10px solid orange";

body.style.backgroundColor = "#0e0e00";

console.log("hello world this is testy branch");

let x = document.createElement("div");

body.appendChild(x);

x.innerHTML = " hello<h1> heaven or hell it's all the same</h> ";

x.style.color = "orange";

x.style.width = "340px";

x.addEventListener("click", function () {
  
  

  console.log("fuck the police ");

  x.innerText = "fuck the police ";

});

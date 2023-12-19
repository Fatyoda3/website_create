const button = document.querySelector("button"); // Access the first element in the HTML collection
let input = document.querySelector("input"); // Use querySelector to select the first input element

let bye = () => console.log("hello ");

const calculate = () => {
    console.log(input.value); 
    input.value= eval(input.value);// Access the value property of the input
}

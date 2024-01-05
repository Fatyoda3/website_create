//destructuring
let cars = ["sedan", "suv", "mini", "eco"];

let [tata, venus, bentley, jaguar] = cars;

/* console.log(tata, venus, bentley, jaguar); */

let Operation = [true, 12, "Jack"];

//console.log(...Operation);

let details = (bool, num, ...args) => {
  console.log(bool, num);
  args.forEach((e) => console.log(e));
};

//details(false, 666, "jack", "bang tang", false, true);

let BigDetail = [...cars, ...Operation];

//same for the objects as well
//BigDetail.forEach((e) => console.log(e));

//for in loops for the object
//for of loops for the array

let myDetails = {
  name: "Raj bala",
  age: 25,
  isHandsome: true,
};

//myDetails['name'] or myDetails.name both work
for (let detail in myDetails) {
  console.log(detail);
  console.log(myDetails[detail]);
  //console.log(myDetails.detail);
}

let duplicate = [];
for (let i = 0; i < 12; i++) {
  duplicate.push(i);
  duplicate.push(i);
}
// console.log(duplicate); //24 entries here

// let UniqueSet = new Set(duplicate);
// console.log(UniqueSet); //12 entries only'

//map returns a new array doesn't mutate the original

let newArray = duplicate.map((e) => e + 2);
// console.log(...newArray);

let EvenNumberOnly = duplicate.filter((e) => e % 2 == 0);

// console.log(...EvenNumberOnly);


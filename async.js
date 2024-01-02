/* 
console.log('start');

setTimeout(()=>{
  console.log("time is 4s ");
}, 4000);


setTimeout(()=>{
  console.log("time is 1s ");
}, 1000);


setTimeout(()=>{
  console.log("time is 0s ");
}, 0);

console.log('end'); */

function register(cb) {
  setTimeout(() => {
    console.log("registered "), cb();
  }, 2000);
}

function otp(cb) {
  setTimeout(() => {
    console.log("otp sent");
    cb();
  }, 2000);
}

function userLogin(cb) {
  setTimeout(() => {
    console.log("login successful");
    cb();
  }, 4000);
}

function greet() {
  setTimeout(() => {
    console.log("hello world ");

  }, 3000);
}
//callback hell
register(() => {
  otp(() => {
    userLogin(() => {
      greet();
    });
  });
});

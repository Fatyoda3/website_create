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

async function Auth() {
  await register();
  await otp();
  await userLogin();
  await greet();

}

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("registered ");

      resolve();
    }, 2000);
  });
}

function otp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject('sorry the otp could not be sent');

      console.log("otp sent");
     /*  resolve(); */
    }, 2000);
    
  });
}

function userLogin() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login successful");
      resolve();
    }, 4000);
  });
}

function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("hello world ");
      resolve();
    }, 3000);
  });
}

//callback hell
/* register(() => {
  otp(() => {
    userLogin(() => {
      greet();
    });
  });
});
 */

register().then(otp).then(userLogin).then(greet).catch((e)=>{
  console.log(e);
});// daisy chaining


/* Auth().catch((e) =>{
  console.log(e);
}); */


let promiseOne  = new Promise(function(resolve,reject){
    setTimeout( function()  {
        console.log("Async task is begin");
        resolve()
    }, 1000);
})
promiseOne.then(function(){
    console.log("promiseOne is resolved")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is begin")
        resolve()
    },1000)
}).then(function(){
    console.log("promiseTwo is resolved");
})

let promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 3 is Begin")
        resolve({username:"Abhishek" , password:1234})
    }, 2000);
})

promiseThree.then(function(user){
     console.log(user);
})

let promisefour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if(!error){
        console.log("Async task 4 is Begin")
        resolve({username:"Abhishek Singh" , password:1234})
        }else{
            reject("Error: Something went wrong")
        }
    }, 2000);
})

promisefour.then((user)=>{
   console.log(user);  //we can also directly print that value but if any finction return value we woill access with one more username
   return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally("Alaways Executed")

const promise1 = new Promise(function(resolve, reject) {

    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({ username: "Abhishek", email: "Abhi@123.com", password: 1234 })
        }
        else {
            reject("Error : Something went wrong")
        }
    },1000)
 
})

async function consumepromise() {
   try {
    let response = await promise1
    console.log(response);
   } catch (error) {
    console.log(error);
   }

}
  consumepromise();
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const value of arr) {
    console.log(value);
}

let str = "Hello JavaScript!"

for (const charcter of str) {
    if (charcter == ' ') {
        continue;
    }
    console.log(charcter);
}








// ***************We can iterate like this but this is not a good way to oterate the object .To iterate the object we use for in loop***************

// const obj = {
//     name:"Abhishek",
//     loc: "Banglore",
//     MobileNo: 917347267342,
//     profession:"devloper",
// };
// for(const [keys,value] of Object.entries(obj)){
//     console.log(keys , ":-" ,value);
// }
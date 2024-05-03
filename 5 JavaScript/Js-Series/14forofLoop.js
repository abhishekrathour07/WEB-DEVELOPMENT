let arrays = ['a','b','c','d']
for (let index = 0; index < arrays.length; index++) {
    console.log(arrays[index]);
    
}




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








// ***************We can iterate like this but this is not a good way to oterate the object .***************

// const obj = {
//     name:"Abhishek",
//     loc: "Banglore",
//     MobileNo: 917347267342,
//     profession:"devloper",
// };
// for(const [keys,value] of Object.entries(obj)){
//     console.log(keys , ":-" ,value);
// }
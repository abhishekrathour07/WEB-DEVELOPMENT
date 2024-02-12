let arr = [1, 2, 3, 4, 5, 6, 7, 8]

for (const key in arr) {
    console.log(` Index :- ${key} Values:- ${arr[key]}`);
}

const obj = {
    name: "Rahul",
    loc: "Bihar",
    MobileNo: 917347267342,
    profession: "Web Dev",
}

for (const key in obj) {
    console.log(`  ${key} :- ${obj[key]}`);
} 


// const obj = [
//     {
//         name: "Abhishek",
//         loc: "Banglore",
//         MobileNo: 917347267342,
//         profession: "devloper",
//     },
//     {
//         name: "Shashi",
//         loc: "Bangluru",
//         MobileNo: 917347267342,
//         profession: "FullStack Dev",
//     },
//     {
//         name: "Rahul",
//         loc: "Bihar",
//         MobileNo: 917347267342,
//         profession: "Web Dev",
//     }

// ]

// for (const key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }
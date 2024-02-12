let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];

arr.forEach((arr) => console.log(arr));

console.log("\n");

arr.forEach((item) => {
    if (item > 4)
        console.log(item);
})

arr.forEach((val, indx, arr) => console.log(`index = ${indx} Value = ${val} Array = ${arr}`));

const obj = [
    {
        name: "Abhishek",
        loc: "Banglore",
        MobileNo: 917347267342,
        profession: "devloper",
    },
    {
        name: "Shashi",
        loc: "Bangluru",
        MobileNo: 917347267342,
        profession: "FullStack Dev",
    },
    {
        name: "Rahul",
        loc: "Bihar",
        MobileNo: 917347267342,
        profession: "Web Dev",
    },
]

obj.forEach((item) => console.log(item.name));
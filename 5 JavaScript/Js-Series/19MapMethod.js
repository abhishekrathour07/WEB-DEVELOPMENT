function fact(num) {
    if (num === 0 || num === 1)
        return 1
    else
        return num * fact(num - 1)

}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const factArr = arr.map((fact))
const muntiplyArr = arr.map((num) =>num*10)

console.log(factArr);
console.log(muntiplyArr);


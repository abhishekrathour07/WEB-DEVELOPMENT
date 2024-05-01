let arr = [1, 2, 3, 4, 5, 6];
console.log(arr);

arr.push(7)
console.log(arr);

arr.pop();
console.log(arr)

arr.unshift(123);
console.log(arr)

arr.shift();
console.log(arr)

console.log(arr.length);
console.log(typeof arr);

let arr1 = arr.slice(1, 4);
let arr2 = arr.splice(1, 4);
console.log(arr1);
console.log(arr2);
console.log(arr);

let newArr = [1, 2, 3, 4, 5, 6, 7];
console.log(newArr.includes(5));
console.log(newArr.includes(12));

console.log(newArr.indexOf(4));

console.log(newArr.join("-"));
console.log(typeof newArr.join())


console.log(newArr.toString());
console.log(newArr.reverse());

const flatArray = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10]]]
const newflatArray = flatArray.flat(Infinity)
console.log(newflatArray);

// concatination
let array1 = [1, 2, 3, 4, 5];
let array2 = ['a', 'b', 'c', 'd'];
const result = array1.concat(array2);
// or array spreading
const newResult = [...array1, ...array2, ...arr];
console.log(newResult);

console.log(Array.from("abhishek"))

x = 11;
y = 22;
z = 33;
console.log(Array.of(x,y,z));


// push insert element at last
// pop del element from last
// unshift insert element in beginning
// shift delete element from beginning
// slice return tge piece of an arrry
// splice cut the piece of an array and chages the original array
// include return true if element present in array
// include return flase if element is not present in array
// indexof return index of given element
// join convert array into the form of string. we can use seperator also to seprate elemetn
// reverse function is use to reverse the array
// flat method is used to seperate the array of array


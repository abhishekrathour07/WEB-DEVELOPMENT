// push the element in the array by using own function

let arr = [1, 2, 3, 4, 5, 6]



Object.prototype.letsPush = function (num) {
    let indx = 0
    arr.forEach((val) =>
        indx++
    )
    arr[indx] = num
}

arr.letsPush(12);
arr.letsPush(112);
arr.letsPush(122);
console.log(arr);

// pop the element in the array by using own function

Array.prototype.letspop = function () {

    delete arr[this.length - 1]
    this.length = this.length - 1

}

arr.letspop();
console.log(arr);
arr.letspop();
console.log(arr);
arr.letspop();
console.log(arr);



let arrnew = Array.from("1234567 ")
let NumArr = arr.map((val) => Number(val));
console.log(NumArr);
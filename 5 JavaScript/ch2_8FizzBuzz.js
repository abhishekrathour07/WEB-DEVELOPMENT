var array = [];
var count = 1;
function arrayfizzbuzz() {
    while (count <= 100) {
        if (count % 3 == 0 && count % 5 == 0) {
            array.push("Three&Five");
        }
        else if (count % 3 == 0) {
            array.push("Three");
        }
        else if (count % 5 == 0) {
            array.push("Five");
        }
        else {

            array.push(count);
        }
        count++;
    }
    console.log(array);
}
arrayfizzbuzz();
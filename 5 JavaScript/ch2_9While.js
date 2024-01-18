count = 1
function NumberGame(num) {
    while (count <= 100) {
        console.log(num + " - " + count + " = " + (num - count));
        count++;
    }
}
NumberGame(200);

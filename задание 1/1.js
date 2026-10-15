
function fillArray(n) {
    let arr = [];
    let i = 1;
    while (i <= n) {
        arr.push(i);
        i++;
    }
    return arr;
}
let filled = fillArray(5)
console.log(filled);
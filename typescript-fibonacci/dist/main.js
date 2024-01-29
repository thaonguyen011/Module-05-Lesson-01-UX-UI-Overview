function fibonacci() {
    let arr = [1, 1];
    let count = 0;
    while (count <= 30) {
        let newFibo = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(newFibo);
        count++;
    }
    return arr;
}
function sumArr(array) {
    let sum = 0;
    for (let index of array) {
        sum += index;
    }
    return sum;
}
let arr = fibonacci();
console.log('array ' + arr);
console.log('sum ' + sumArr(arr));
//# sourceMappingURL=main.js.map
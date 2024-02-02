function fibonacci() {
    var arr = [1, 1];
    var count = 0;
    while (count <= 30) {
        var newFibo = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(newFibo);
        count++;
    }
    return arr;
}
function fibonacci_v02(number) {
    if (number < 2) {
        return number;
    }
    else {
        return fibonacci_v02(number - 1) + fibonacci_v02(number - 2);
    }
}
console.log("v02: " + fibonacci_v02(10));
function sumArr(array) {
    var sum = 0;
    // for (let index of array) {
    //     sum += index;
    // }
    array.forEach(function (num) {
        sum += num;
    });
    return sum;
}
var arr = fibonacci();
// console.log('array ' + arr);
// console.log('sum ' + sumArr(arr));

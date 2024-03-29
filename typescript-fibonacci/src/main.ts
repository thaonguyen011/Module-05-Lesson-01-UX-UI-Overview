function fibonacci(): any {
    let arr = [1, 1];
    let count = 0;
    while (count <= 30) {
        let newFibo = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(newFibo);
        count++;
    }
    return arr;
}

function fibonacci_v02(number : number): number {
    if (number < 2) {
        return number;
    } else {
        return fibonacci_v02(number - 1) + fibonacci_v02(number - 2);
    }
}

console.log("v02: " + fibonacci_v02(10));
function sumArr(array : number[]): number {
    let sum = 0;
    // for (let index of array) {
    //     sum += index;
    // }
    array.forEach(num => {
        sum += num;
    })
    return sum;
}

let arr =  fibonacci();
// console.log('array ' + arr);
// console.log('sum ' + sumArr(arr));
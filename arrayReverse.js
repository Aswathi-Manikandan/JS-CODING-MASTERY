let arr = [10, 23, 90, 4]
function func(arr) {
    return arr.reverse()
}
console.log(func(arr));

let arr1 = [10, 30, 3, 54]
function func1(arr1) {
    let out = []
    for (let i = arr1.length - 1; i >= 0; i--) {
        out.push(arr1[i])
    }
    return out
}
console.log(func1(arr1));


let arr2 = [12, 34, 56];

function func2(arr2) {
    let ar = [];

    for (let i = 0; i < arr2.length; i++) {
        let res = Number(String(arr2[i]).split('').reverse().join(''));
        ar.push(res);
    }

    return ar;
}

console.log(func2(arr2));



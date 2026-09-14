let arr = [100, -200, 300, -400, -800]
function neg(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr2.push(arr[i])

        }
    }
    return arr2
}
console.log(neg(arr));

let arr3 = [100, -200, 300, -400, -800]
let out = arr3.filter((x) => x < 0)
console.log(out);



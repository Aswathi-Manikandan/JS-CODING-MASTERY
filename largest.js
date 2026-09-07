let arr = [10, 20, 2, 344, 8, 9]
function func(arr) {
    let lar = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lar) {
            lar = arr[i]
        }
    }
    return lar
}
console.log(func(arr));

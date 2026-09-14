let arr = [10, 4, 5, 8, 3]
function even(arr) {
    for (let i = 0; i < arr.legth; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);

        }
    }
    return arr
}
console.log(even(arr));

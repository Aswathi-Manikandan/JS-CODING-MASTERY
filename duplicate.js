let arr = [1, 2, 2, 4, 5, 7, 8]
function func(arr) {

    let arq = []
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }
        if (count < 2) {
            arq.push(arr[i])
        }
    }
    return arq

}
console.log(func(arr));


let arr2 = [1, 2, 2, 4, 5, 7, 8];

let result = [...new Set(arr2)];

console.log(result);
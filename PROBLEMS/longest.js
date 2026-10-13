let str = "I love javascript programming"
let out = str.split(' ')
function func(str) {
    let long = out[0]
    for (let i = 0; i < out.length; i++) {
        if (out[i] > long) {
            long = out[i]
        }
    }
    return long
}
console.log(func(str));


let str1 = "I love javascript programming"
let out1 = str1.split(' ')
let result = out1.reduce((a, b) => a.length > b.length ? a : b)
console.log(result);

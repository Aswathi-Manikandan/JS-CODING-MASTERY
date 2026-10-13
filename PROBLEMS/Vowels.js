let str = "aswathi manikandan"
function countvowels(str) {
    let arr = str.split('')
    let vowel = 'aeiouAEIOU'
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (vowel.includes(arr[i])) {
            count++
        }
    }
    return count
}
console.log(countvowels(str));

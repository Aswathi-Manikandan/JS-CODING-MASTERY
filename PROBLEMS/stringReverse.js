// REVERSE A STRING

let str = "aswathi manikandan"
let rev = str.split('').reverse().join('')
console.log(rev);


let str1 = "aswathi manikandan"
let rev1 = str1.split(' ').reverse().join(' ')
console.log(rev1);


let str2 = "aswathi manikandan"
function rev2(str2) {
    let out = ''
    for (let i = str2.length - 1; i >= 0; i--) {
        out = out + str2[i]
    }
    return out
}
console.log(rev2(str2));

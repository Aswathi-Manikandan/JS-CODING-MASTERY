let pali = "amma"
let out = pali.split('').reverse().join('')
console.log(out === pali);


let pali1 = "amma"
function func(pali1) {
    let rev = ''
    for (let i = pali1.length - 1; i >= 0; i--) {
        rev = rev + pali1[i]
    }
    if (rev === pali1) {
        return true
    }
    return false
}


console.log(func(pali1));

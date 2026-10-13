// COUNTING TOTAL CHARACTERS 

let ch = "javascript"
function count(ch) {
    return ch.length
}
console.log(count(ch));


let ch1 = "javascript"
function count1(ch1) {
    let total = 0
    for (let i = 0; i < ch1.length; i++) {
        total++
    }
    return total
}
console.log(count1(ch1));


//COUNT VOWELS
let ch2 = "javascript"
function vo(ch2) {
    let co = 0
    let vow = 'aeiouAEIOU'
    for (let i = 0; i < ch2.length; i++) {
        if (vow.includes(ch[i])) {
            co++
        }
    }
    return co
}
console.log(vo(ch2));

//COUNT A PARTICULAR CHARCTER
let word = "bananaaa"
let find = 'a'
let coun = 0
function func(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === find) {
            coun++
        }
    }
    return coun
}
console.log(func(word));

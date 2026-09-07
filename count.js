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

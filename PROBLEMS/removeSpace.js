let ch = " hello world "
console.log(ch);

function space(ch) {
    let out = ch.trim()
    return out
}
console.log(space(ch));


let ch2 = " hel  lo wor ld "
function sp(ch2) {
    let spa = ""
    for (let i = 0; i < ch2.length; i++) {
        if (ch2[i] !== " ") {
            spa = spa + ch2[i]
        }
    }
    return spa
}
console.log(sp(ch2));

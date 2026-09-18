let str = "henah"
function rep(str) {
    let out = str.split('')
    for (let i = 0; i < out.length; i++) {
        for (let j = i + 1; j < out.length; j++) {
            if (out[i] === out[j]) {
                return out[i]
            }
        }
    }
}
console.log(rep(str));

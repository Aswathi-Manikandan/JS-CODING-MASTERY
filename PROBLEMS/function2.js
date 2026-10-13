function abc(x, y, z) {
    //here there is no default parameter so it will be counted
}
function xyz(a, b = 0, c) {
    //a counted then stops immediately when reaches to b . because b is default parameter
}
function pqr(a = 0, b, c) {
    //default starts immeiately
}
console.log(abc.length);//3
console.log(xyz.length);//1
console.log(pqr.length);//0

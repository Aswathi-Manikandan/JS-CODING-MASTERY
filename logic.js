let a = [1, 2, 3, 4]
a[11] = 100
console.log(a); // [ 1, 2, 3, 4, <7 empty items>, 100 ]
console.log(a.length); // 12

function abc() {
    return {
        b: 1
    }
}
console.log(abc());

// abc() is called
//      ↓
// return is reached
//      ↓
// { b: 1 } is the value to return
//      ↓
// abc() gives { b: 1 }
//      ↓
// console.log() prints it

function abc() {
    return
    {
        b: 1
    }
}//undefined







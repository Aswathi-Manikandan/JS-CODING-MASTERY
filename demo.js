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
}
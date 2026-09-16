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


function xyz() {
    console.log(a);
    var a = 100

}
let b = xyz()
console.log(b);

function func() {
    return;
    xyz = 100
}
console.log(func()); //undefined


console.log("hello", "world");//hello world
console.log("100" - "10");//90
console.log("100" + "10");//10010
console.log("aswathi" - "manikandan");//NaN

let a = 10
let w = 20;
[a, w] = [w, a]
console.log(a);//20
console.log(w);//10







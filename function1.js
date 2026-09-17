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


let a = "akshay"
function func() {
    console.log(a);
    let a = "aswathi"
}
func() //reference error 

// This happens because of the **Temporal Dead Zone (TDZ)** and **`let` hoisting**.

// Your code:

// ```js
// let a = "akshay";

// function func() {
//     console.log(a);

//     let a = "aswathi";
// }

// func();
// ```

// ### Why ReferenceError? 🤔

// The important thing is:

// ```js
// function func() {
//     console.log(a);   // ❌
//     let a = "aswathi";
// }
// ```

// Because `a` is declared with `let` **inside the function**, JavaScript treats the function as having its own local `a`.

// Conceptually, it's like:

// ```js
// function func() {
//     let a;           // declaration is hoisted
//     console.log(a);  // ❌ TDZ
//     a = "aswathi";
// }
// ```

// But `let a` is **not initialized** until execution reaches:

// ```js
// let a = "aswathi";
// ```

// Before that point, `a` is in the **Temporal Dead Zone (TDZ)**.

// So:

// ```js
// console.log(a);
// ```

// tries to access the local `a` while it is still in the TDZ → **ReferenceError**.

// ### What about the outer `a`?

// You have:

// ```js
// let a = "akshay";
// ```

// You might think JavaScript should use this:

// ```text
// a → "akshay"
// ```

// But it doesn't, because the function already has its own:

// ```js
// let a = "aswathi";
// ```

// The **local `a` shadows the outer `a`** throughout the function.

// ### 🧠 Remember this

// ```text
// let/const declaration
//         ↓
//    created/hoisted
//         ↓
//    TDZ starts
//         ↓
//  initialization
//         ↓
//    can access
// ```

// So:

// ```js
// console.log(a); // ❌ TDZ
// let a = "aswathi";
// ```

// is different from:

// ```js
// console.log(a);
// var a = "aswathi";
// ```

// With `var`, the variable is initialized with `undefined`, so that version would print `undefined` rather than throwing a ReferenceError.


abc()
var abc = function () {
    console.log("i am first");

}

abc()
function abc() {
    console.log("i am last");

}
abc()




// output:
// i am last
// i am first
// i am first

// Let's understand **why**.



// ### 1. First`abc()`

//     ```js
// abc();
// ```

// At the beginning, the ** function declaration** is hoisted completely:

// ```js
// function abc() {
//     console.log("i am last");
// }
// ```

// So the first call finds the function declaration.

// ```text
// i am last
// ```

// ---

// ### 2. Then this happens

//     ```js
// var abc = function () {
//     console.log("i am first");
// };
// ```

// `var abc` is hoisted, but its assignment happens only when execution reaches this line.

//     Conceptually:

// ```js
// var abc;  // hoisted

// function abc() {
//     console.log("i am last");
// }
// ```

// Then during execution:

// ```js
// abc = function () {
//     console.log("i am first");
// };
// ```

// Now `abc` points to the new function.

// ---

// ### 3. Second`abc()`

//     ```js
// abc();
// ```

// At this point:

// ```text
// abc → function "i am first"
// ```

// Therefore:

// ```text
// i am first
// ```

// ---

// ### 4. The function declaration doesn't take control again

// You might think:

// ```js
// function abc() {
//     console.log("i am last");
// }
// ```

// will replace it again.

// It doesn't.

// The function declaration was already created during hoisting.The later assignment:

// ```js
// abc = function () {
//     console.log("i am first");
// };
// ```

//     ** overwrites the value of`abc`.**

//         So`abc` still points to`"i am first"`.

// ---

// ### 5. Third`abc()`

//     ```js
// abc();
// ```

// `abc` is still:

// ```js
// function () {
//     console.log("i am first");
// }
// ```

// Therefore:

// ```text
// i am first
// ```

// ---

// ## 🧠 The easiest way to understand it

// Think of the execution in two phases.

// ### Phase 1 — Hoisting

// JavaScript prepares:

// ```js
// var abc;

// function abc() {
//     console.log("i am last");
// }
// ```

// The function declaration gets its function value immediately.

// ### Phase 2 — Execution

//     ```js
// abc();
// // i am last
// ```

// Then:

// ```js
// abc = function () {
//     console.log("i am first");
// };
// ```

// Now `abc` has been replaced.

// ```js
// abc();
// // i am first

// abc();
// // i am first
// ```

// ### ⭐ Remember

//     > ** Function declaration is hoisted with its body.**
// >
// > ** `var` declaration is hoisted, but its assignment is not.**
// >
// > ** When the `var` function expression is reached, it overwrites the function declaration's value.**

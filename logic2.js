let name = "aswathi"
name[1] = 'akshay'
console.log(name);//aswathi

// Why?

// Strings are immutable in JavaScript.

// That means you cannot change an individual character directly.

// name[1] → "s"

// Trying:

// name[1] = "akshay";

// doesn't change the string.

// So the output remains:

// aswathi

let str = "hello"
str = "hey"
console.log(str); //hey

// Why?

// let allows the variable to be reassigned.

// str → "hello"
//       ↓ reassigned
// str → "hey"

// The string "hello" itself was not changed. A new string "hey" was assigned to str.
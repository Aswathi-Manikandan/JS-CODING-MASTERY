function abc() {
    var a = 100
}
console.log(a);



// Output:

// ReferenceError: a is not defined
// Why?

// a is declared inside the function, so it has function scope.

// function abc() {
//     var a = 100;  ← available only inside abc()
// }

// console.log(a);  ← outside → ❌

// Short note:

// var inside a function is accessible only inside that function.

// This is called function scope.
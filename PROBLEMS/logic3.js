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

let a = 10
console.log(a * 12);//120
console.log(a ** 12);//1000000000000


function func() {
    salary = 200000
    console.log(salary);//200000 -JavaScript creates salary as a global variable:

}
func()

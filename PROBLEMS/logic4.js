function fname(record) {
    if (record == { age: 18 }) {
        console.log("adult");

    } else if (record === { age: 28 }) {
        console.log('still');

    } else {
        console.log("no record");

    }
}
fname({ age: 28 })

//  Output

// ```text
// no record
// ```

// ### Why?

// You call:

// ```js
// fname({ age: 28 })
// ```

// So `record` refers to one object:

// ```js
// record → { age: 28 }
// ```

// Now JavaScript checks:

// ```js
// record == { age: 18 }
// ```

// ❌ `false`

// Then:

// ```js
// record === { age: 28 }
// ```

// ❌ **Also `false`**

// This may look confusing because both contain `age: 28`.

// But:

// ```js
// record === { age: 28 }
// ```

// creates a **new object**:

// ```text
// record ─────→ { age: 28 }   ← Object A

//               { age: 28 }   ← Object B
// ```

// Object A and Object B are different references.

// Therefore:

// ```js
// record === { age: 28 } // false
// ```

// So the `else` block runs:

// ```text
// no record
// ```

// ### 🧠 Remember

// ```js
// { age: 28 } === { age: 28 }  // false
// ```

// But:

// ```js
// let a = { age: 28 };
// let b = a;

// a === b  // true
// ```

// If you want to check the **value of age**, use:

// ```js
// record.age === 28
// ```

// not:

// ```js
// record === { age: 28 }
// ```


console.log(+true);//+ converts true to a number.
//true → 1
//false → 0

console.log(!'test');//'test' is truthy, and ! reverses truthy → false.
//truthy → ! → false
//falsy  → ! → true

function check() {
    return 100
}
var check
console.log(check);//[Function: check]
//The var check declaration is hoisted, but it does not overwrite the existing function declaration.

//So check still refers to the function

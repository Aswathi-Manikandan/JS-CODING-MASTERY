// map()
// Purpose: Creates a new array by transforming every element of the original array.
// Syntax
// array.map((element, index, array) => {
//     return newValue;
// });


// What each part means:
// - array: The original array on which you call map().
// - element: The current element being processed.
// - index: The position of the current element; optional.
// - array: The original array itself; optional.
// - return newValue: The value to place in the new array.
// You usually need only element.


//Create a new array where every number is multiplied by 2.

const arr = [2, 4, 6, 8]
let out = arr.map((x) => x * 2)
console.log(out);

//2. Find the square of every number.
let arr2 = [1, 2, 3, 4, 5]
let out2 = arr2.map((num1) => num1 * num1)
console.log(out2);

//3. Convert every name to uppercase.
let names = ["arun", "meera", "rahul"]
let out3 = names.map((upper) => upper.toUpperCase())
console.log(out3);

//4.Add 10 to every number.
let arr4 = [100, 200, 300]
let out4 = arr4.map((add) => add + 10)
console.log(out4);

//5.Extract only the names.
let arr5 = [{ name: "Arun", age: 22 }, { name: "Meera", age: 25 }]
let out5 = arr5.map((nam) => nam.name)
console.log(out5);

//6.Convert each number into its parity label.
let arr6 = [1, 2, 3, 8, 6, 4]
let out6 = arr6.map((parity) => (parity % 2 === 0) ? 'even' : 'odd')
console.log(out6);

//7.Double only positive numbers
let numbers1 = [2, -4, 5, -7, 8];
let out7 = numbers1.map((x) => {
    if (x > 0) {
        x * x
    }
    return x
})
console.log(out7);

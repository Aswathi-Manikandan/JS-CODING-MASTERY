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

//7.Convert every negative number into its positive equivalent
let data3 = [-5, 10, -15, 20, -25];

let result = data3.map((x) => {
    return Math.abs(x);
});

console.log(result);

//8.Replace every zero with 100
let number8 = [0, 1, 0, 3, 0, 5, 0]
let out8 = number8.map((x) => {
    if (x === 0) {
        x = 100
    }
    return x
})
console.log(out8);

//9.Square even numbers and cube odd numbers
let values6 = [2, 3, 4, 5, 6];
let out9 = values6.map((x) => {
    return (x % 2 === 0) ? x * x : x * x * x
})
console.log(out9);


//10.Double only positive numbers
let numbers1 = [2, -4, 5, -7, 8];

let out7 = numbers1.map((x) => {
    if (x > 0) {
        return x * 2;
    }
    return x;
});

console.log(out7);

//11.Reverse every string
let words = ["hello", "world", "javascript"];
let out11 = words.map((x) => x.split('').reverse().join(''))
console.log(out11);


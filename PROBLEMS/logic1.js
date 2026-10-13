console.log("aswathi" > 9);

// ### `"string" > number`

// ```js
// console.log("aswathi" > 9);
// // false
// ```

// **Why?**

// When a string and number are compared using `>`, JavaScript converts the string into a number.

// ```js
// Number("aswathi");
// // NaN
// ```

// So the comparison becomes:

// ```js
// NaN > 9
// // false
// ```

// **Reason:** `NaN` is not greater than, less than, or equal to any number.

// ### Short Note

// ```text
// String + Number comparison
//         ↓
// String converted to Number
//         ↓
// "aswathi" → NaN
//         ↓
// NaN > 9
//         ↓
// false
// ```

// **Remember:**
// `"10" > 9` → `true`
// `"aswathi" > 9` → `false` because `"aswathi"` becomes `NaN`.


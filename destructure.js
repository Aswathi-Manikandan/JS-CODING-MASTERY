[y] = [1, 2, 3, 4, 5]
console.log(y);


// output:
// 1
// ```

// **Why?**

// This is **array destructuring**.

// ```text
// [y] = [1, 2, 3, 4, 5]
//  ↑       ↑
//  y       first value
// ```

// So:

// ```js
// y = 1;
// ```

// The remaining values are ignored.

// **Short note:**
// `[y] = [1,2,3,4,5]` → `y` gets the **first element** → `1`.

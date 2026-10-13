let obj = [{ name: "aswathi", marks: 99 },
{ name: 'john', marks: 62 },
{ name: "riya", marks: 80 }]
let out = obj.filter((x) => x.marks > 85)
console.log(out);


const abc = {}
abc.key = "hello"
const abc2 = { ...abc }
console.log(abc);//{ key: 'hello' }
console.log(abc2);//{ key: 'hello' }
abc2.key = "world"
console.log(abc2);//{ key: 'world' }



// Step 1: Create abc
// const abc = {};

// An empty object is created in memory.

// abc ─────→ { }

// Then:

// abc.key = "hello";

// Now:

// abc ─────→ { key: "hello" }
// Step 2: Spread creates a new object
// const abc2 = { ...abc };

// The ...abc copies the properties of abc into a new object.

// So now:

// abc  ─────→ { key: "hello" }

// abc2 ─────→ { key: "hello" }

// They contain the same value, but they are different objects.

// That's why:

// console.log(abc);
// console.log(abc2);

// both show:

// { key: "hello" }
// Step 3: Change abc2
// abc2.key = "world";

// You are changing the object that abc2 points to:

// abc  ─────→ { key: "hello" }

// abc2 ─────→ { key: "world" }

// So:

// console.log(abc2);

// gives:

// { key: "world" }

// And importantly:

// console.log(abc);

// still gives:

// { key: "hello" }
// 🧠 The main difference

// Without spread:

// const abc2 = abc;

// Both variables point to the same object:

// abc  ──┐
//        ↓
//      { key: "hello" }
//        ↑
// abc2 ──┘

// Changing abc2.key would also change abc.key.

// With spread:

// const abc2 = { ...abc };

// you create a new object:

// abc  ─────→ { key: "hello" }

// abc2 ─────→ { key: "hello" }

// Changing one doesn't change the other.

// ⭐ Remember this

// abc2 = abc → same object/reference
// abc2 = { ...abc } → new object/shallow copy
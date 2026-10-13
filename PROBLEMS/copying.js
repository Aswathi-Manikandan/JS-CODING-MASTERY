const obj = { test: "aswathi" }
const obj2 = obj
obj2.test = "world"
console.log(obj);
console.log(obj2);

// obj2 = obj does not create a new object.
// Both obj and obj2 point to the same object.
// So, changing obj2.test also changes obj.test.

// 🧠 Remember:
// Objects are assigned by reference, not copied

//LEARN DEEP AND SHALLOW COPY DEEPLY

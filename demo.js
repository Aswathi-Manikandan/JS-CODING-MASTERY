let a = {
    name: "hello"
}
let b = {
    ...a
}
b.name = "world"
console.log(a.name);

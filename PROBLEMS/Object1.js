let users = [
    { name: "Anu", age: 17 },
    { name: "Rahul", age: 22 },
    { name: "Akhil", age: 16 },
    { name: "Meera", age: 20 }
];

function func(users) {
    let out = users.filter((x) => x.age > 18)
    return out
}
console.log(func(users));

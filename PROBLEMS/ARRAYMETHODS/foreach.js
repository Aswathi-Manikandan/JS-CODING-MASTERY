// forEach()
// Purpose: Executes a callback function for every element in an array. It does not return a new array.

// Syntax:
// array.forEach((element, index, array) => {
//     // logic
// });

//Q1. Print all elements
let numbers = [10, 20, 30, 40, 50];
let out = numbers.forEach((ele) => console.log(ele)
)

//2.Print student names
let names = ["Arun", "Rahul", "Anu", "Meera"]
let out2 = names.forEach((x) => console.log(x)
)

//3. print numbers with their index
let num = [5, 10, 15, 20]
let out3 = num.forEach((x3, index) =>
    console.log(`Number : ${x3},Index : ${index}`)
)

//4.Calculate the square of each number and print it
let square = [2, 4, 6, 8]
let out4 = square.forEach((x) =>
    console.log(x * x)
)

//5.Print only positive numbers
let positive = [10, -5, 20, -8, 30, 0]
console.log("POSITIVE NUMBERS BELOW :");
let out5 = positive.forEach((x) => {
    if (x > 0) {
        console.log(x);
    }
}
)

//6.Count the number of even and odd numbers
let num6 = [10, 15, 20, 25, 30, 35, 40]
function func(num6) {
    let ecount = 0
    let ocount = 0
    let out6 = num6.forEach((x) => {
        if (x % 2 === 0) {
            ecount++
        } else {
            ocount++
        }
    })
    console.log(`Even:${ecount},Odd:${ocount}`);
}
func(num6);

//7.Calculate the total
let prices = [100, 250, 150, 300];
function total(prices) {
    let sum = 0
    prices.forEach((x) => {
        sum = sum + x
    })

    return sum
}
console.log(total(prices));


//8.Employee Details
const employees = [
    { name: "Arun", salary: 25000 },
    { name: "Meera", salary: 35000 },
    { name: "Rahul", salary: 30000 }
];
employees.forEach((x) => {
    console.log(`${x.name} - ${x.salary}`);
})

//9.Calculate the total marks of students
const students = [
    { name: "Anu", marks: 80 },
    { name: "Rahul", marks: 75 },
    { name: "Meera", marks: 90 }
];
function func3(students) {
    let sum1 = 0
    students.forEach((x) => {
        sum1 = sum1 + x.marks
    })
    return sum1
}
console.log(func3(students));

//10.Print products that are in stock
const products = [
    { name: "Laptop", inStock: true },
    { name: "Mobile", inStock: false },
    { name: "Mouse", inStock: true },
    { name: "Keyboard", inStock: false }
];

function func4(products) {
    products.forEach((x) => {
        if (x.inStock === true) {
            console.log(x.name);
        }
    });
}

func4(products);

//11.Find the highest Salary
const employees1 = [
    { name: "Arun", salary: 25000 },
    { name: "Meera", salary: 45000 },
    { name: "Rahul", salary: 35000 },
    { name: "Anu", salary: 55000 }
];
function func5(employees1) {
    let lar = 0
    employees1.forEach((x) => {
        if (x.salary > lar) {
            lar = x.salary
        }
    })
    return lar
}
console.log(func5(employees1));

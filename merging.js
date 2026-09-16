let a = "hello";
let b = "world";
let result = "";

for (let i = 0; i < a.length; i++) {
    result += a[i] + b[i];
}

console.log(result);//hweolrllod

let a1 = "hello";
let b1 = "world";

let result1 = a1.split("").map((x, i) => x + b1[i]).join("");

console.log(result);
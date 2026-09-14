var x = 0
var y = '0'
var z = false
console.log(x == y)//true : == is loose equality, so JavaScript converts the string '0' into the number 0
console.log(x == z);//true : == When false is compared with a number using ==, JavaScript converts:false → 0
console.log(y == z);//true


console.log(x === y)
console.log(x === z)
console.log(y === z)
var x = 0
var y = '0'
var z = false
console.log(x == y)//true : == is loose equality, so JavaScript converts the string '0' into the number 0
console.log(x == z);//true : == When false is compared with a number using ==, JavaScript converts:false → 0
console.log(y == z);//true


console.log(x === y)
console.log(x === z)
console.log(y === z)

console.log(null == undefined);
console.log(null === undefined);

// null is a type og object 
// undefined is a type of undefined 
//NaN is a type of number , NaN means Not-a-Number. It represents a value that resulted from an invalid mathematical operation

console.log([] + []); // when we actually add both empty arrays it become an empty string so it will be blank
console.log({} + {}); //The + operator tries to convert objects to primitive values. {} → "[object Object]" {} → "[object Object]"
console.log([] + {});
console.log([] == []); //different array === different array ↓ false
console.log({} == {});
//Object A == Object B
// ↓
//Different objects
//↓
//false

console.log([] != []); //true
console.log({} != {}); //true

console.log([] == {}); //false
console.log([] != {}); //true

console.log("hello" - "world"); //Nan


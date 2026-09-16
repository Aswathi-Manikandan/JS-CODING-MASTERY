const abc = {}
abc.key = "hello"
const abc2 = { ...abc }
console.log(abc);//{ key: 'hello' }
console.log(abc2);//{ key: 'hello' }
abc2.key = "world"
console.log(abc2);//{ key: 'world' }



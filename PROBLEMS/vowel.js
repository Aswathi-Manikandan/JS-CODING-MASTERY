let str = "aswathi";
let vowels = "";

for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
        vowels += str[i];
    }
}

console.log(vowels); 66
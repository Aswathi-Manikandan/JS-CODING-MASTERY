let arr = [10, 20, 30, 'c', 80, "hello", 7, "world", "j", "l"]
function func(arr) {
    let num = []
    let str = []
    let ch = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "string" && arr[i].length === 1) {
            ch.push(arr[i])
        } else if (typeof (arr[i]) === "number") {
            num.push(arr[i])
        } else {
            str.push(arr[i])
        }
    }
    return { num, str, ch }
}
console.log(func(arr));

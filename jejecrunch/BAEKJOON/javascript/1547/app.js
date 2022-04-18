const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const N = +input.shift()
let arr = [1, 0, 0]
while (input.length > 0) {
    const [X, Y] = input
        .shift()
        .split(" ")
        .map((v) => +v)
    if (arr[X - 1] == 1) {
        arr[X - 1] = 0
        arr[Y - 1] = 1
    } else if (arr[Y - 1] == 1) {
        arr[Y - 1] = 0
        arr[X - 1] = 1
    }
}
const result = +getKeyByValue(arr, 1) + 1

function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value)
}

console.log(result)

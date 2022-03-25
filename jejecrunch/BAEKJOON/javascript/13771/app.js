const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v)
const N = input[0]
let array = new Array(N)
input.map((v, i) => {
    if (i != 0) {
        array = [...array, v.toFixed(2)]
    }
})
array.sort((a, b) => a - b)
console.log(array[1])

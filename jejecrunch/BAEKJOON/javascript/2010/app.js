const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v)
const N = input.shift()
let result = 0

input.forEach((v) => {
    result += v
})

console.log(result - N + 1)

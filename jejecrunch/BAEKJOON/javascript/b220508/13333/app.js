const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)

const N = +input.shift()
const arr = input
    .shift()
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => b - a)
let q = 0

while (q + 1 <= arr[q]) {
    q++
}
console.log(q)

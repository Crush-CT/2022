const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const N = +input.shift()
const arr = input
    .shift()
    .split(" ")
    .map((v) => +v)
let score = 0
let total = 0

while (arr.length > 0) {
    const s = arr.shift()
    // console.log(s)
    if (s == 1) {
        score++
        total += score
    } else {
        score = 0
    }
}

console.log(total)

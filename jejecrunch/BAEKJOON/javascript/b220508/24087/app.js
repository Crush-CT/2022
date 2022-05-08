const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [S, A, B] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v)

let a = A
let count = 0
while (S > a) {
    a += B
    count++
}

console.log(count * 100 + 250)

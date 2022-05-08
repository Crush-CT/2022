const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const SU = input[0]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => b - a)
const US = input[1]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => b - a)
let count = 0

for (let i = 0; i < 5; i++) {
    if (SU[i] > US[i]) count++
}

console.log(count)

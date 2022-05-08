const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [A, B, C, D] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
console.log(A * C)

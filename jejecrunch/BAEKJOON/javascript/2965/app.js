const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b)
const diff = [input[1] - input[0], input[2] - input[1]]
console.log(Math.max(...diff) - 1)

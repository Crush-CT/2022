const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const result = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => b - a)

console.log(result[0] + result[1])

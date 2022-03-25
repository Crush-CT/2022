const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b)
    .join(" ")
console.log(input)

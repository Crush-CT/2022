const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [d1, d2] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v)
const pi = 3.141592

console.log((2 * (d1 + pi * d2)).toFixed(6))

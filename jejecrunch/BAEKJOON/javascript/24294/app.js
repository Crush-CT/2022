const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [w1, h1, w2, h2] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v)

console.log(4 + 2 * Math.max(w1, w2) + 2 * (h1 + h2))

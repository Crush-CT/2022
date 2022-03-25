const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [a1, a2, a3] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v)

console.log(Math.min(a2 * 2 + a3 * 4, Math.min(a1 * 2 + a3 * 2, a1 * 4 + a2 * 2)))

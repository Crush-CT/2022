const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [A, B] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v)

const total = A + B > 12 ? (A + B) % 12 : A + B

console.log(total == 0 ? "12" : total)

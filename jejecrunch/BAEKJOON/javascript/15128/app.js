const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [p1, q1, p2, q2] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)

console.log((p1 * p2) % (q1 * q2 * 2) == 0 ? 1 : 0)

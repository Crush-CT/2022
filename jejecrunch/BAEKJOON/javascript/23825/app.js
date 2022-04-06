const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [N, M] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)
const min = Math.min(N, M) % 2 == 0 ? Math.min(N, M) : Math.min(N, M) - 1

console.log(min / 2)

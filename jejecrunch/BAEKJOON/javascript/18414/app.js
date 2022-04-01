const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const [X, L, R] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)
let min = 4143248723748
let result = 0

for (let i = L; i <= R; i++) {
    min = Math.min(min, Math.abs(X - i))

    if (min == Math.abs(X - i)) result = i
}

console.log(result)

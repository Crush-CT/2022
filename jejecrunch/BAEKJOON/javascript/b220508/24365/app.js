const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [A, B, C] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)

const arr = [
    [A, 0],
    [B, 1],
    [C, 2],
]
const avg = (A + B + C) / 3
arr.sort((a, b) => a[0] - b[0])
console.log(
    Math.abs(arr[2][1] - arr[0][1]) * (avg - arr[0][0]) +
        Math.abs(arr[2][1] - arr[1][1]) * (avg - arr[1][0])
)

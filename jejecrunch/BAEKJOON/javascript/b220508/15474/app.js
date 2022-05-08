const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [N, A, B, C, D] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number)

const X = Math.ceil(N / A) * B
const Y = Math.ceil(N / C) * D

console.log(Math.min(X, Y))

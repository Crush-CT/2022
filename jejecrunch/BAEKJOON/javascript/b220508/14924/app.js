const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [S, T, D] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number)

console.log((D / (S * 2)) * T)

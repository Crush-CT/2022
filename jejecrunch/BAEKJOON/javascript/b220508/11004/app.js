const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const input = fs.readFileSync(filePath).toString().trim().split("\n")
const [N, K] = input[0].split(" ").map((v) => +v)
const a = input[1]
    .split(" ")
    .map((v) => parseInt(v))
    .sort((a, b) => a - b)

console.log(a[K - 1])

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const input = fs.readFileSync(filePath).toString().trim().split("\n")
const [N, L, H] = input[0].split(" ").map((v) => +v)
const a = input[1]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b)
    .slice(L, N - H)
    .reduce((acc, cur) => acc + cur)

const result = a / (N - L - H)

console.log(result)

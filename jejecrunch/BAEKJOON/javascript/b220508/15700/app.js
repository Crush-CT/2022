const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [N, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(BigInt)

console.log(BigInt((N * M) / 2n).toString())

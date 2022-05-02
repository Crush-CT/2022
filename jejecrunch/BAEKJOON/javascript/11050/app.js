const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const [N, K] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)

function factorial(num) {
    if (num === 0) return 1
    return num * factorial(num - 1)
}

console.log(factorial(N) / (factorial(K) * factorial(N - K)))

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const [n, k] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v)

if (k + 60 > n) {
    console.log(n * 1500)
} else {
    const next = k + 60
    const less = n - next
    console.log(next * 1500 + less * 3000)
}

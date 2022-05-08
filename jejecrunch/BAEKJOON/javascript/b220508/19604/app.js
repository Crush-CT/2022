const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)

const N = +input[0]
let xa = new Array(N)
let ya = new Array(N)
for (let i = 1; i <= N; i++) {
    xa.push(+input[i].split(",")[0])
    ya.push(+input[i].split(",")[1])
}
xa.sort((a, b) => a - b)
ya.sort((a, b) => a - b)

console.log(xa[0] - 1 + "," + (ya[0] - 1))
console.log(xa[N - 1] + 1 + "," + (ya[N - 1] + 1))

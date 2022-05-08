const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const input = fs.readFileSync(filePath).toString().trim().split("\n")
const N = +input[0]
const a = input[1]
    .split(" ")
    .map((v) => parseInt(v))
    .sort()
const b = [...input[2].split(" ").map((v) => parseInt(v))].sort((a, b) => b - a)
let result = 0
a.sort((a, b) => a - b).map((v, i) => {
    result += v * b[i]
})
console.log(result)

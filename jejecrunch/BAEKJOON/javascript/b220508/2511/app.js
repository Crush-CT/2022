const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const A = input
    .shift()
    .split(" ")
    .map((v) => +v)
const B = input
    .shift()
    .split(" ")
    .map((v) => +v)

const result = new Array(2).fill(0)
let team = "D"

A.forEach((v, i) => {
    if (v > B[i]) {
        result[0] += 3
        team = "A"
    } else if (v < B[i]) {
        result[1] += 3
        team = "B"
    } else if (v === B[i]) {
        result[0] += 1
        result[1] += 1
    }
})

console.log(result.join(" "))
console.log(result[0] > result[1] ? "A" : result[0] < result[1] ? "B" : team)

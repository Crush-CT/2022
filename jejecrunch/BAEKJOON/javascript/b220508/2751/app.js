const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let N = 0
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v, i) => {
        if (i == 0) N = +v
        else return +v
    })
    .filter((v) => v !== undefined)
    .sort((a, b) => a - b)
    .join("\n")

console.log(input)

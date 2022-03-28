const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)
const N = +input[0]
const arr = input
    .splice(1)
    .sort((a, b) => {
        return a - b
    })
    .join("\n")
console.log(arr)

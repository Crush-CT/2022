const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("")
    .map((v) => {
        return +v
    })
    .sort((a, b) => b - a)
    .join("")
console.log(input)

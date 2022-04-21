const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .filter((v) => v % 2 == 1)
    .sort((a, b) => a - b)

if (input.length === 0) console.log(-1)
else {
    console.log(input.reduce((acc, cur) => (acc += +cur), 0))
    console.log(input[0])
}

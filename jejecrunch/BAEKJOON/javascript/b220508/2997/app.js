const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b)
const diff = [input[1] - input[0], input[2] - input[1]]
let result = 0
if (diff[0] == diff[1]) {
    result = input[2] + diff[0]
} else if (diff[0] > diff[1]) {
    result = input[0] + diff[1]
} else {
    result = input[1] + diff[0]
}

console.log(result)

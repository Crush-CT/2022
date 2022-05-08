const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b)

const [a, b, abc] = [input[0], input[1], input[input.length - 1]]

console.log(a + " " + b + " " + (abc - a - b))

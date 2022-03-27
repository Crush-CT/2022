const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)

const [A1, P1] = input[0].split(" ").map((v) => +v)
const [R1, P2] = input[1].split(" ").map((v) => +v)

console.log(A1 / P1 < (Math.pow(R1, 2) * Math.PI) / P2 ? "Whole pizza" : "Slice of pizza")

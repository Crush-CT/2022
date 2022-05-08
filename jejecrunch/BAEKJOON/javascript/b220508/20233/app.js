const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [a, x, b, y, T] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v)

const totalA = T > 30 ? a + (T - 30) * x * 21 : a
const totalB = T > 45 ? b + (T - 45) * y * 21 : b

console.log(totalA + " " + totalB)

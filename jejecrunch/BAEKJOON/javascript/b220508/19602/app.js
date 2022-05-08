const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const [S, M, L] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v)

let result = S + 2 * M + 3 * L

if (result >= 10) console.log("happy")
else console.log("sad")

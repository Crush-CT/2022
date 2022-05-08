const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let max = Number.MIN_SAFE_INTEGER,
    maxI = 0,
    maxJ = 0
const numbers = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" ").map(Number))

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (max < numbers[i][j]) {
            max = numbers[i][j]
            maxI = i + 1
            maxJ = j + 1
        }
    }
}

console.log(max + "\n" + maxI + " " + maxJ)

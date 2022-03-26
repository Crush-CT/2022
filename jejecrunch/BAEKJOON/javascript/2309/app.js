const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let total = 0
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => {
        total += +v
        return +v
    })
    .sort((a, b) => a - b)
let a, b

for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
        if (total - input[i] - input[j] == 100) {
            a = i
            b = j
            break
        }
    }
}

for (let i = 0; i < 9; i++) {
    if (i == a || i == b) continue
    console.log(input[i])
}

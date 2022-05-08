const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const n = fs.readFileSync(filePath).toString().trim()

let sum = 0
for (let i = 1; i <= n; i++) {
    for (let j = i; j <= i * 2; j++) {
        sum += j
    }
}

console.log(sum)

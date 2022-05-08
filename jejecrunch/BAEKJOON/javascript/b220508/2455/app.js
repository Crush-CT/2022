const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
let result = Number.MIN_VALUE
let total = 0

while (input.length > 0) {
    const [A, B] = input
        .shift()
        .split(" ")
        .map((v) => +v)

    total += B - A
    result = Math.max(total, result)
}
console.log(result)

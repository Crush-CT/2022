const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const arr = input[1]
    .split(" ")
    .map((v) => +v)
    .sort((a, b) => a - b)
let min = 0
for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        arr[i] += arr[j]
    }
}
arr.map((v) => (min += v))
console.log(min)

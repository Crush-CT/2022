const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const N = +input.shift()
let arr = new Array(N)
let i = 0

while (input.length > 0) {
    const [a, b, c] = input
        .shift()
        .split(" ")
        .map((v) => +v)
    if (a == b && b == c) {
        arr[i] = 10000 + a * 1000
    } else if (a == b) {
        arr[i] = 1000 + a * 100
    } else if (b == c) {
        arr[i] = 1000 + b * 100
    } else if (a == c) {
        arr[i] = 1000 + c * 100
    } else {
        arr[i] = Math.max(a, b, c) * 100
    }
    i++
}

console.log(Math.max(...arr))

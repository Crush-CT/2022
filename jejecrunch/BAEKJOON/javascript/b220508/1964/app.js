const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let N = +fs.readFileSync(filePath).toString().trim()
let [a, b] = [5, 7]

while (N > 1) {
    a += b
    b += 3
    N--
}

console.log(a % 45678)

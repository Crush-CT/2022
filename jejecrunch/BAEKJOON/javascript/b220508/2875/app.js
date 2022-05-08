const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let [N, M, K] = fs.readFileSync(filePath).toString().trim().split(" ")
let result = 0

while (N >= 2 && M >= 1) {
    N -= 2
    M--
    result++
}

while (N + M < K) {
    N += 2
    M++
    result--
}

console.log(result)

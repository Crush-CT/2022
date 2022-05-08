const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let [P, K] = fs.readFileSync(filePath).toString().trim().split(" ")
K = Number(K)
let isPrime = new Array(1000001).fill(false)
let isGood = true,
    ans = 0

for (let i = 2; i < K; ++i) {
    if (isPrime[i]) continue

    if (check(i)) {
        isGood = false
        ans = i
        break
    }

    for (let j = i * 2; j < K; j += i) isPrime[j] = true
}

console.log(isGood ? "GOOD" : "BAD " + ans)

function check(n) {
    let sum = 0
    for (let i of P) {
        sum = (sum * 10 + (i - "0")) % n
    }

    return sum == 0
}

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [K, L] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => BigInt(v))

let N = 0n
for (let i = 2n; i < L; i++) {
    if (K % i === 0n) {
        N = i
        break
    }
}
console.log(N > 0n ? "BAD " + N : "GOOD")

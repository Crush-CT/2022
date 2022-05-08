const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [N, K] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)

let count = 0,
    i = 0

for (i = 1; i <= N; i++) {
    if (N % i == 0) count++
    if (count == K) break
}

if (i <= N) console.log(i)
else console.log(0)

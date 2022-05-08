const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [A, B] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => BigInt(v))

if (A <= B) console.log((((B - A + 1n) * (B + A)) / 2n).toString())
else console.log((((A - B + 1n) * (B + A)) / 2n).toString())

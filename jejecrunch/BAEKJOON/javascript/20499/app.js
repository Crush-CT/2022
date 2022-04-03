const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [K, D, A] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("/")
    .map((v) => +v)
console.log(K + A < D || D == 0 ? "hasu" : "gosu")

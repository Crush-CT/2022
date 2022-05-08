const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [t1, m1, t2, m2] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)
const T1 = t1 * 60 + m1,
    T2 = t2 * 60 + m2
let result = T2 - T1
if (result < 0) result += 1440
console.log(result + " " + Math.floor(result / 30))

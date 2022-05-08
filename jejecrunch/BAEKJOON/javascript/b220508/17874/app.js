const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const [n, h, v] = fs.readFileSync(filePath).toString().trim().split(" ")
console.log(Math.max(h, n - h) * Math.max(v, n - v) * 4)

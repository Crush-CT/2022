const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = +fs.readFileSync(filePath).toString().trim()

let result = 25 + input * 0.01

if (result < 100) result = 100
else if (result > 2000) result = 2000

console.log(result.toFixed(2))

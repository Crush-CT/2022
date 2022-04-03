const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const a = +fs.readFileSync(filePath).toString().trim()
const result = 4 * Math.sqrt(a)
console.log(result % 1 == 0 ? result.toFixed(1) : result.toFixed(8))

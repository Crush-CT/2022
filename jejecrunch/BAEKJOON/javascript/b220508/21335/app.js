const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const a = +fs.readFileSync(filePath).toString().trim()
const result = Math.sqrt(a / Math.PI) * 2 * Math.PI
console.log(result % 1 == 0 ? result : result.toFixed(9))

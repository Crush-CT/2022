const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const a = +fs.readFileSync(filePath).toString().trim()
console.log((2 * Math.PI * Math.sqrt(a / Math.PI)).toFixed(10))

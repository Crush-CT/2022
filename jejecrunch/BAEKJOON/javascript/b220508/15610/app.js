const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const a = fs.readFileSync(filePath).toString().trim()

console.log((Math.sqrt(a) * 4).toFixed(7))

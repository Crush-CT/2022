const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const a = fs.readFileSync(filePath).toString().trim()

if (Math.sqrt(a) % 1 != 0) console.log((Math.sqrt(a) * 4).toFixed(8))
else console.log((Math.sqrt(a) * 4).toFixed(1))

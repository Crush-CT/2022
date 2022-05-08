const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const input = fs.readFileSync(filePath).toString().trim().split("\n")
const [m, n] = input[0].split(" ")

if (m >= 8) console.log("satisfactory")
else console.log("unsatisfactory")

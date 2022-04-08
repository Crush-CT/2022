const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim()

console.log(input === "N" || input === "n" ? "Naver D2" : "Naver Whale")

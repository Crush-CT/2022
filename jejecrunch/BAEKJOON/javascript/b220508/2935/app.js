const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [A, x, B] = fs.readFileSync(filePath).toString().trim().split("\n")
if (x === "+") console.log((BigInt(A) + BigInt(B)).toString())
else if (x === "*") console.log((BigInt(A) * BigInt(B)).toString())

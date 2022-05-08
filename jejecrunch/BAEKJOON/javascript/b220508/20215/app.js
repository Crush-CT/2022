const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [w, h] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)

const result = Math.abs(w + h - Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2)))

if (result % 1 == 0) console.log(Math.abs(w + h - Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2))))
else console.log(Math.abs(w + h - Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2))).toFixed(9))

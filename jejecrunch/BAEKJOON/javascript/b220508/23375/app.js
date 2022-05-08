const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const [x, y] = input
    .shift()
    .split(" ")
    .map((v) => +v)
const r = +input.shift()

const result = [
    [x - r, " ", y + r, "\n"].join(""),
    [x + r, " ", y + r, "\n"].join(""),
    [x + r, " ", y - r, "\n"].join(""),
    [x - r, " ", y - r].join(""),
].join("")
console.log(result)

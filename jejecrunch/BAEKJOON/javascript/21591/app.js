const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [wc, hc, ws, hs] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)

if (wc - ws >= 2 && hc - hs >= 2) {
    console.log(1)
} else {
    console.log(0)
}

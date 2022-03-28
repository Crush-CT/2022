const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v)

let A = input[0] * 3 + input[1] * 2 + input[2] * 1,
    B = input[3] * 3 + input[4] * 2 + input[5] * 1

if (A > B) {
    console.log("A")
} else if (A < B) {
    console.log("B")
} else {
    console.log("T")
}

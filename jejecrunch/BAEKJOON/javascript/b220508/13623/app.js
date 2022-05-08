const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [A, B, C] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)

if (A !== B && A !== C) {
    console.log("A")
} else if (B !== A && B !== C) {
    console.log("B")
} else if (C !== A && C !== B) {
    console.log("C")
} else {
    console.log("*")
}

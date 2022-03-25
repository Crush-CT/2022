const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [l, r] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)

if (l == 0 && r == 0) {
    console.log("Not a moose")
} else if (l == r) {
    console.log("Even " + +(l + r))
} else {
    console.log("Odd " + Math.max(l, r) * 2)
}

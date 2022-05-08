const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [A, P] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)

if (A * 7 < P * 13) {
    console.log("Petra")
} else if (A * 7 > P * 13) {
    console.log("Axel")
} else {
    console.log("lika")
}

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [stand, answer] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)
const [A, C, E] = stand.split(" ").map((v) => +v)
const [x, y, z] = answer.split(" ").map((v) => +v)
let result = ""
if (z >= E) {
    result = "E"
    if (y >= C) {
        result = "C"
        if (x >= A) {
            result = "A"
        } else if (x >= A / 2) {
            result = "B"
        }
    } else if (y >= C / 2) {
        result = "D"
    }
}
console.log(result)

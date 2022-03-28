const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)

let obj = [
    ["Soongsil", input[0]],
    ["Korea", input[1]],
    ["Hanyang", input[2]],
].sort((a, b) => a[1] - b[1])
if (input[0] + input[1] + input[2] >= 100) {
    console.log("OK")
} else {
    console.log(obj[0][0])
}

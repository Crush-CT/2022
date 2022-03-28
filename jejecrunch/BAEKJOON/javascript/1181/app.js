const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)
const N = +input[0]
const set = [...new Set(input.splice(1))]
    .sort((a, b) => {
        if (a.length > b.length) return 1
        else if (a.length < b.length) return -1
        else if ((a.length = b.length)) {
            return a < b ? -1 : 1
        }
    })
    .join("\n")
console.log(set)

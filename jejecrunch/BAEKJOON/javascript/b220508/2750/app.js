const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => {
        return +v
    })

const N = input[0]
const arr = new Array(N)
input.map((v, i) => {
    if (i != 0) arr[i - 1] = +v
})
arr.sort((a, b) => a - b).map((v) => console.log(v))

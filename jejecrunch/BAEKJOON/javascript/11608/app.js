const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("")
    .sort()
    .reduce((all, cur) => {
        all[cur] = (all[cur] || 0) + 1
        return all
    }, {})
let result = 0
input = Object.entries(input).sort(([, a], [, b]) => a - b)

Object.keys(input).forEach((v, i) => {
    if (i < Object.keys(input).length - 2) {
        result += input[i][1]
    }
})

console.log(result)

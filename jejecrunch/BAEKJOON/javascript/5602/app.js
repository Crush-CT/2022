const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)

const [n, m] = input
    .shift()
    .split(" ")
    .map((v) => +v)

let total = new Array(m).fill(0)
for (let i = 0; i < n; ++i) {
    input
        .shift()
        .split(" ")
        .map((v, j) => {
            total[j] += +v
            return +v
        })
}
let map = new Map()
total.map((v, i) => {
    map.set(i + 1, v)
})
let result = ""
let map2 = [...map].sort((a, b) => b[1] - a[1]).map((v) => (result += v[0] + " "))

console.log(result.trim())

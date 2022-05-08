const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v)
const N = input.shift()
const arr = input.sort((a, b) => a - b)
let count_n = 0

const red = arr.reduce((all, cur) => {
    all[cur] = (all[cur] || 0) + 1
    return all
}, {})
let min_a = []
let max_n = Math.max.apply(null, Object.values(red))
Object.keys(red).forEach(function (key) {
    if (red[key] === max_n) {
        min_a.push(key)
    }
})
if (min_a.length > 1) {
    min_a.sort(function (a, b) {
        return a - b
    })
    count_n = min_a[1]
} else {
    count_n = min_a[0]
}
const result = [
    Math.round(arr.reduce((a, c) => a + c, 0) / N),
    arr[Math.floor(arr.length / 2)],
    count_n,
    arr[arr.length - 1] - arr[0],
].join("\n")
console.log(result)

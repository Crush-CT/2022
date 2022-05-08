const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => +v)
const TC = input.shift()
const result = new Array()

function T(n) {
    return (n * (n + 1)) / 2
}

while (input.length > 0) {
    const N = input.shift()
    let temp = 0

    for (let i = 1; i <= N; i++) temp += i * T(i + 1)

    result.push(temp)
}

console.log(result.join("\n"))

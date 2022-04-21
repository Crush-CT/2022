const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .filter((v) => v != "")

let T = +input.shift()
const result = new Array()
while (T > 0) {
    const N = +input.shift()
    const arr = input
        .splice(0, N)
        .reduce((acc, cur) => (acc += BigInt(cur) % BigInt(N)), 0n)
        .toString()
    result.push((arr / N) % 1 == 0 ? "YES" : "NO")
    T--
}

console.log(result.join("\n"))

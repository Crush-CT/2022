const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)

const [p1, s1] = input[0].split(" ").map((v) => +v)
const [s2, p2] = input[1].split(" ").map((v) => +v)

const p = p1 + p2
const s = s1 + s2

if (p > s) {
    console.log("Persepolis")
} else if (p < s) {
    console.log("Esteghlal")
} else if (p == s) {
    if (s1 < p2) {
        console.log("Persepolis")
    } else if (s1 > p2) {
        console.log("Esteghlal")
    } else if (s1 == p2) {
        console.log("Penalty")
    }
}

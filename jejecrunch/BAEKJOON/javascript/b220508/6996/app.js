const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)

const TC = +input[0]
for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].split(" ").map((v) => v.toLowerCase())
    console.log(a + " & " + b + " are " + (solve(a, b) ? "anagrams." : "NOT anagrams."))
}

function solve(a, b) {
    const str1 = a.split("").sort().join("")
    const str2 = b.split("").sort().join("")

    if (a.length == b.length) {
        if (str1 == str2) return true
        else return false
    } else {
        return false
    }
}

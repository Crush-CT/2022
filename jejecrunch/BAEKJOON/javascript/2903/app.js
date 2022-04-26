const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim()

function solve(n) {
    let init = 2
    for (let i = 0; i < n; i++) {
        init += init - 1
    }
    return init ** 2
}

console.log(solve(input))

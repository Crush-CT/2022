const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [N, M] = fs.readFileSync(filePath).toString().trim().split(" ")

let result = ""
const arr = new Array(M)
function solve(at, depth) {
    if (depth == M) {
        for (let v of arr) {
            result += v + " "
        }
        result += "\n"
        return
    }

    for (let i = at; i < N; i++) {
        arr[depth] = i + 1
        solve(i, depth + 1)
    }
}

solve(0, 0)
console.log(result.trim())

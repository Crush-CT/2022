const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [N, M] = fs.readFileSync(filePath).toString().trim().split(" ")

let result = ""
function solve(cnt, val) {
    if (cnt == M) {
        result += `${val}\n`
        return false
    } else {
        for (let i = 1; i <= N; i++) {
            solve(cnt + 1, val + i + " ")
        }
    }
}

solve(0, "")
console.log(result.trim())

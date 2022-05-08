const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [N, M] = fs.readFileSync(filePath).toString().trim().split(" ")

const arr = []

for (let i = 1; i <= N; i++) {
    arr.push(String(i))
}

function solve(cnt, used, val) {
    if (cnt == M) {
        console.log(val)
        return false
    } else {
        for (let i = 0; i < N; i++) {
            if (used & (1 << i)) continue
            solve(cnt + 1, used | (1 << i), val + arr[i] + " ")
        }
    }
}

solve(0, 0, "")

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const N = +fs.readFileSync(filePath).toString().trim()
let answer = ""
for (let i = 1; i <= N; i++) {
    for (let j = i; j > 0; j--) answer += "*"
    for (let k = 2 * N - 2 * i; k > 0; k--) answer += " "
    for (let l = i; l > 0; l--) answer += "*"
    answer += "\n"
}
for (let i = N - 1; i > 0; i--) {
    for (let j = i; j > 0; j--) answer += "*"
    for (let k = 2 * N - 2 * i; k > 0; k--) answer += " "
    for (let l = i; l > 0; l--) answer += "*"
    if (i != 1) answer += "\n"
}

console.log(answer)

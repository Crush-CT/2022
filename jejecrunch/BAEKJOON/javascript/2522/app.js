const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const N = +fs.readFileSync(filePath).toString().trim()
let answer = ""
for (let i = 1; i <= N; i++) {
    for (let k = 1; k <= N - i; k++) answer += " "
    for (let j = 1; j <= i; j++) answer += "*"
    answer += "\n"
}
for (let i = N - 1; i > 0; i--) {
    for (let k = 1; k <= N - i; k++) answer += " "
    for (let j = 1; j <= i; j++) answer += "*"
    if (i != 1) answer += "\n"
}

console.log(answer)

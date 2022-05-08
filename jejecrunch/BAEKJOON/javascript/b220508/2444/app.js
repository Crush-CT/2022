const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const N = +fs.readFileSync(filePath).toString().trim()
let answer = ""

for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - i - 1; j++) answer += " "
    for (let k = 0; k < 2 * i + 1; k++) answer += "*"
    answer += "\n"
}

for (let i = N - 1; i >= 0; i--) {
    for (let j = 0; j < N - i - 1; j++) answer += " "
    for (let k = 0; k < 2 * i + 1; k++) answer += "*"
    if (i !== 0) answer += "\n"
}

console.log(answer)

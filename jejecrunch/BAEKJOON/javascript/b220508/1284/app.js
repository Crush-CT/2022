const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n").slice(0, -1)
let answer = new Array()

for (let i = 0; i < input.length; i++) {
    let total = 2
    const arr = input[i].split("").map((v, i) => {
        if (+v == 1) total += 2
        else if (+v == 0) total += 4
        else total += 3
    })

    total += arr.length - 1
    answer.push(total)
}

console.log(answer.join("\n"))

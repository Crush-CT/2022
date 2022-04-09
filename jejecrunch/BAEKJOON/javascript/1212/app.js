const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const a = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("")
    .map((v) => +v)
let answer = ""
if (a.length == 1 && a == "0") answer = 0
else {
    a.forEach((v, i) => {
        const ten = parseInt(v, 8)
        let binary = ten.toString(2)

        while (i !== 0 && binary.length < 3) {
            binary = "0".repeat(3 - binary.length) + binary
        }

        answer += binary
    })
}

console.log(answer)

const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const T = +input.shift()
let str = ""
while (input.length > 0) {
    let C = +input.shift()
    let a, b, c, d

    a = Math.floor(C / 25)
    C %= 25
    b = Math.floor(C / 10)
    C %= 10
    c = Math.floor(C / 5)
    C %= 5
    d = C / 1

    str += a + " " + b + " " + c + " " + d
    if (input.length !== 0) str += "\n"
}

console.log(str)

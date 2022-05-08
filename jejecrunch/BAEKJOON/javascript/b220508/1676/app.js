const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
// prettier-ignore
const input = fs.readFileSync(filePath).toString().trim()

let i5 = +input
let i2 = +input

let r5 = 0
let r2 = 0
while (i5 >= 5) {
    r5 += parseInt(i5 / 5)
    i5 /= 5
}
while (i2 >= 5) {
    r2 += parseInt(i2 / 2)
    i2 /= 2
}
console.log(Math.min(r2, r5))

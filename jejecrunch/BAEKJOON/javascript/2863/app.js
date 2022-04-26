const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const [a, b] = input.shift().split(" ")
const [c, d] = input.shift().split(" ")
const sum = [a / c + b / d, c / d + a / b, d / b + c / a, b / a + d / c]
const max = Math.max(...sum)

sum.forEach((v, i) => {
    if (v === max) {
        console.log(i)
        return
    }
})

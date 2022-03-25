const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [N, input] = fs.readFileSync(filePath).toString().trim().split("\n")
if (+N == 0) {
    console.log("divide by zero")
} else {
    let total = 0
    let ex = 0
    let count = new Array()

    const arr = input.split(" ").map((v) => {
        total += +v
        return +v
    })

    const avr = total / +N

    arr.map((v) => {
        count[v] = (count[v] || 0) + 1 / +N
    })

    count.map((v, i) => {
        ex += v * i
    })

    console.log((avr / ex).toFixed(2))
}

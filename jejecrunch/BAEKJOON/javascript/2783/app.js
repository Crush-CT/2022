const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const seven = input.shift().split(" ")
const N = +input.shift()
const arr = new Array()

while (input.length > 0) {
    const temp = input.shift().split(" ")
    arr.push([...temp, (temp[0] / temp[1]) * 1000])
}

const result = Math.min((seven[0] / seven[1]) * 1000, arr.sort((a, b) => a[2] - b[2])[0][2])

console.log(result.toFixed(2))

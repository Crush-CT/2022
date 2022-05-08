const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

const N = +input.shift()
const arr = input
    .shift()
    .split(" ")
    .map((v) => +v)

let totalY = 0
let totalM = 0

for (let i = 0; i < N; i++) {
    totalY += arr[i] % 30 === 0 ? (arr[i] / 30 + 1) * 10 : Math.ceil(arr[i] / 30) * 10
    totalM += arr[i] % 60 === 0 ? (arr[i] / 60 + 1) * 15 : Math.ceil(arr[i] / 60) * 15
}
if (totalY == totalM) {
    console.log("Y M " + totalY)
} else if (totalY < totalM) {
    console.log("Y " + totalY)
} else if (totalY > totalM) {
    console.log("M " + totalM)
}

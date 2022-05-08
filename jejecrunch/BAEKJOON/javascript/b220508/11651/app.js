const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const input = fs.readFileSync(filePath).toString().trim().split("\n")
const N = +input[0]
let arr = new Array(N).fill([], [])
input.splice(1).map((v, i) => {
    arr[i] = v.split(" ").map((v) => parseInt(v))
})
const result = arr
    .sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1]
        }
        return a[0] - b[0]
    })
    .join("\n")
    .replaceAll(",", " ")
console.log(result)

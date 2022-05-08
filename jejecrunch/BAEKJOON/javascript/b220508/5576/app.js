const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let W = new Array(),
    K = new Array()
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v, i) => {
        if (i >= 0 && i < 10) W.push(+v)
        else if (i >= 10 && i < 20) K.push(+v)
        return +v
    })

const ws = W.sort((a, b) => b - a)
const ks = K.sort((a, b) => b - a)

console.log(+(ws[0] + ws[1] + ws[2]) + " " + +(ks[0] + ks[1] + ks[2]))

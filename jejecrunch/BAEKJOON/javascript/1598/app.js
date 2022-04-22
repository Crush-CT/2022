const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
// prettier-ignore
const [x, y] = fs.readFileSync(filePath).toString().trim().split(" ").map((v) => +v)
let a = getCoord(x),
    b = getCoord(y)

function getCoord(num) {
    let r, c
    r = num % 4
    if (!r) r = 4
    c = Math.floor(num / 4)
    if (num % 4 == 0) c--
    return { r, c }
}

let result = Math.abs(a.r - b.r) + Math.abs(a.c - b.c)

console.log(result)

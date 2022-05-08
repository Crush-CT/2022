const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [B, D, J] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)

const [br, bc] = B.split(" ").map((v) => +v)
const [dr, dc] = D.split(" ").map((v) => +v)
const [jr, jc] = J.split(" ").map((v) => +v)

let bcount = Math.max(Math.abs(br - jr), Math.abs(bc - jc))
let dcount = Math.abs(dr - jr) + Math.abs(dc - jc)

if (bcount < dcount) {
    console.log("bessie")
} else if (bcount > dcount) {
    console.log("daisy")
} else if (bcount == dcount) {
    console.log("tie")
}

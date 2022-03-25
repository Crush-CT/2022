const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [S, E] = fs.readFileSync(filePath).toString().trim().split("\n")
const [sh, sm, ss] = S.split(" : ").map((v) => +v)
const [eh, em, es] = E.split(" : ").map((v) => +v)

const t1 = sh * 3600 + sm * 60 + ss
const t2 = eh * 3600 + em * 60 + es

console.log(t1 > t2 ? t2 - t1 + 3600 * 24 : t2 - t1)

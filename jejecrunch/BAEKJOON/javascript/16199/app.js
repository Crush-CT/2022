const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [B, S] = fs.readFileSync(filePath).toString().trim().split("\n")
const [by, bm, bd] = B.split(" ").map((v) => +v)
const [sy, sm, sd] = S.split(" ").map((v) => +v)
let man = sy - by
const se = sy - by + 1
const yeon = sy - by
if (sm < bm) man--
else if (sm == bm) if (sd < bd) man--

console.log(man + "\n" + se + "\n" + yeon)

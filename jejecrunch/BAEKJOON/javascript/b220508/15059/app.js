const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const [A, R] = fs.readFileSync(filePath).toString().trim().split("\n")
const [ca, ba, pa] = A.split(" ").map((v) => +v)
const [cr, br, pr] = R.split(" ").map((v) => +v)

const answer =
    cr - ca > 0 && br - ba > 0 && pr - pa > 0
        ? cr - ca + br - ba + pr - pa
        : cr - ca > 0 && br - ba > 0
        ? cr - ca + br - ba
        : br - ba > 0 && pr - pa > 0
        ? br - ba + pr - pa
        : cr - ca > 0 && pr - pa > 0
        ? cr - ca + pr - pa
        : cr - ca > 0
        ? cr - ca
        : br - ba > 0
        ? br - ba
        : pr - pa > 0
        ? pr - pa
        : 0

console.log(answer)

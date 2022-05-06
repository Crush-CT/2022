const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const [N, M] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)

const getTwoFive = (n) => {
    let two = 0
    let five = 0
    for (let i = 5; i <= n; i *= 5) {
        five += parseInt(n / i)
    }
    for (let i = 2; i <= n; i *= 2) {
        two += parseInt(n / i)
    }
    return [two, five]
}

const [nt, nf] = getTwoFive(N)
const [mt, mf] = getTwoFive(M)
const [nmt, nmf] = getTwoFive(N - M)
const two = nt - mt - nmt
const five = nf - mf - nmf
console.log(Math.min(two, five))

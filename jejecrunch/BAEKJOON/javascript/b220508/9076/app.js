const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map((v) => v)

const T = +input[0]
for (let i = 1; i <= T; i++) {
    let total = 0

    const arr = input[i]
        .toString()
        .trim()
        .split(" ")
        .map((v) => +v)
        .sort((a, b) => b - a)

    if (arr[1] - arr[3] >= 4) {
        total = "KIN"
    } else {
        arr.map((v, i) => {
            if (i != 0 && i != 4) {
                total += +v
            }
        })
    }

    console.log(total)
}

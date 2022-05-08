const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
let size = 0

for (let i = 0; i < input.length; i += size + 1) {
    size = +input[i]
    let total = 0n
    for (let j = i + 1; j < i + size + 1; j++) {
        total += BigInt(input[j])
    }

    if (total === 0n) {
        console.log(0)
    } else if (total > 0n) {
        console.log("+")
    } else if (total < 0n) {
        console.log("-")
    }
}

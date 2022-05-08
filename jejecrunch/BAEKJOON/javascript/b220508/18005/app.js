const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const n = fs.readFileSync(filePath).toString().trim()

if (+n % 2 == 1) {
    console.log("0")
} else if ((+n / 2) % 2 == 0) {
    console.log("2")
} else {
    console.log("1")
}

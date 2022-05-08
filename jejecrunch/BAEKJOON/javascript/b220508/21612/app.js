const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const B = +fs.readFileSync(filePath).toString().trim()

const result = 5 * B - 400
console.log(result)
if (result < 100) {
    console.log(1)
} else if (result == 100) {
    console.log(0)
} else {
    console.log(-1)
}

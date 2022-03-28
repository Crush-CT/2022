const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const input = +fs.readFileSync(filePath).toString().trim() % 8
if (input == 1) {
    console.log("1")
} else if ([2, 0].includes(input)) {
    console.log("2")
} else if ([3, 7].includes(input)) {
    console.log("3")
} else if ([4, 6].includes(input)) {
    console.log("4")
} else if (input == 5) {
    console.log("5")
}

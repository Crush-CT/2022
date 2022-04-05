const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
let N = +fs.readFileSync(filePath).toString().trim()

while (N > 0) {
    console.log("SciComLove")
    N--
}

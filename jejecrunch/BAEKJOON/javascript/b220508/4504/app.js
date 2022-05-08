const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
// prettier-ignore
const input = fs.readFileSync(filePath).toString().trim().split("\n").filter(v => v!=0)
const n = +input.shift()
let result = ""
while (input.length > 0) {
    const num = +input.shift()
    if (num % n == 0) result += num + " is a multiple of " + n + ".\n"
    else result += num + " is NOT a multiple of " + n + ".\n"
}
console.log(result.trim())

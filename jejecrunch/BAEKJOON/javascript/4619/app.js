const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
// prettier-ignore
const input = fs.readFileSync(filePath).toString().trim().split("\n").filter(v => v!="0 0")
const result = new Array()
while (input.length > 0) {
    const [B, N] = input.shift().split(" ")
    let minDiff = 0x3f3f3f3f
    let minVal = 0x3f3f3f3f
    for (let a = 1; Math.pow(a, N) <= 2000000; a++) {
        let diff = Math.abs(Math.pow(a, N) - B)
        if (diff < minDiff) {
            minDiff = diff
            minVal = a
        }
    }
    result.push(minVal)
}
console.log(result.join("\n").trim())

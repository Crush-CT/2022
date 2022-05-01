const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
// prettier-ignore
const input = fs.readFileSync(filePath).toString().trim().split("\n").filter(v => v!=999)
let prev = input.shift()
const result = new Array()
while (input.length > 0) {
    const tem = input.shift()
    result.push((tem - prev).toFixed(2))
    prev = tem
}
console.log(result.join("\n").trim())

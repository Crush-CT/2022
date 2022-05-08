const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
// prettier-ignore
const input = fs.readFileSync(filePath).toString().trim().split("\n").filter((v) => v !== "0")
const result = new Array()
let i = 1
while (input.length > 0) {
    const n0 = input.shift()
    let n1 = 3 * n0,
        n2 = 0
    if (n1 % 2 == 0) {
        n2 = Math.floor(n1 / 2)
    } else if (n1 % 2 == 1) {
        n2 = Math.floor((n1 + 1) / 2)
    }

    const n3 = 3 * n2
    const n4 = Math.floor(n3 / 9)

    result.push(n1 % 2 == 0 ? i++ + ". even " + n4 : i++ + ". odd " + n4)
}
console.log(result.join("\n"))

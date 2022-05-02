const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
// prettier-ignore
const input = fs.readFileSync(filePath).toString().trim().split("\n").filter((v) => v !== "0 0 0")
const result = new Array()
while (input.length > 0) {
    const [a1, a2, a3] = input
        .shift()
        .split(" ")
        .map((v) => +v)
    if (a3 - a2 == a2 - a1) {
        result.push("AP " + (a3 + (a3 - a2)))
    }

    if (a3 / a2 == a2 / a1) {
        result.push("GP " + a3 * (a3 / a2))
    }
}
console.log(result.join("\n"))

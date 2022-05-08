const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
// prettier-ignore
const input = fs.readFileSync(filePath).toString().trim().split("\n").filter((v) => v !== "0 0")
const result = new Array()
while (input.length > 0) {
    const arr = input
        .shift()
        .split(" ")
        .map((v) => BigInt(v))
    if (arr[0] > arr[1]) result.push("Yes")
    else result.push("No")
}
console.log(result.join("\n"))

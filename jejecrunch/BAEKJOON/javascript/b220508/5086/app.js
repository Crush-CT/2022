const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .filter((v) => v != "0 0")
const result = new Array()
while (input.length > 0) {
    const arr = input.shift().split(" ")
    if (arr[0] % arr[1] === 0) result.push("multiple")
    else if (arr[1] % arr[0] === 0) result.push("factor")
    else result.push("neither")
}
console.log(result.join("\n").trim())

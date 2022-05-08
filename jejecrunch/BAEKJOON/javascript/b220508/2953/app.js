const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const sum = new Array()

while (input.length > 0) {
    const arr = input
        .shift()
        .split(" ")
        .map((v) => +v)

    sum.push(arr.reduce((acc, cur) => (acc += cur), 0))
}
const result = [0, Math.max(...sum)]
for (let i = 0; i < sum.length; i++) {
    if (sum[i] === result[1]) {
        result[0] = i + 1
        break
    }
}
console.log(result.join(" "))

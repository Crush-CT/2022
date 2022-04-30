const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")
const T = +input.shift()
const result = new Array()
while (input.length > 0) {
    const arr = input.shift().split(" ")
    result.push(lcm(arr[0], arr[1]))
}

console.log(result.join("\n").trim())

function gcd(a, b) {
    if (b == 0) return a

    return gcd(b, a % b)
}

function lcm(a, b) {
    return (a * b) / gcd(a, b)
}

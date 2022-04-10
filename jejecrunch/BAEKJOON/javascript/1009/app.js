const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().trim().split("\n")

let T = +input.shift()
let i = 0
let answer = new Array()
while (T > 0) {
    const [a, b] = input[i].split(" ").map((v) => +v)
    let pow = 1
    for (let j = 0; j < b; j++) {
        pow = (pow * a) % 10
        pow = pow === 0 ? 10 : pow
    }
    answer.push(pow)
    i++
    T--
}

console.log(answer.join("\n"))

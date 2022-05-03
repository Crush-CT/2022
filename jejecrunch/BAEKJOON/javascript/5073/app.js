const readline = require("readline")

// 인터페이스 객체를 만들자.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    input.forEach((v) => {
        v.sort((a, b) => b - a)
        if (v[0] >= v[1] + v[2]) console.log("Invalid")
        else if (v[0] == v[1] && v[1] == v[2] && v[0] == v[2]) console.log("Equilateral")
        else if (v[0] == v[1] || v[1] == v[2] || v[0] == v[2]) console.log("Isosceles")
        else if (v[0] != v[1] && v[1] != v[2] && v[0] != v[2]) console.log("Scalene")
    })
}

let input = []

rl.on("line", (line) => {
    if (line === "0 0 0") rl.close()
    else input.push(line.split(" ").map((v) => +v))
})
rl.on("close", () => {
    solve(input)
    process.exit()
})

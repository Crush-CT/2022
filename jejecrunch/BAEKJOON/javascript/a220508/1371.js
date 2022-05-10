const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let max = Math.max(...input)
    let result = ""
    input.forEach((v, i) => {
        if (v == max) result += String.fromCharCode(i + 97)
    })
    console.log(result)
}

const alpha = new Array(27).fill(0)

rl.on("line", (line) => {
    line.split("").forEach((v, i) => {
        alpha[v.charCodeAt(0) - 97]++
    })
}).on("close", () => {
    solve(alpha)
    process.exit()
})

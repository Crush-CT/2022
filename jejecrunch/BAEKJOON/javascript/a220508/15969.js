const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const n = input.shift()
    input = input[0].map((v) => +v)
    const max = Math.max(...input)
    const min = Math.min(...input)

    console.log(Math.abs(max - min))
}

const data = []

rl.on("line", (line) => {
    data.push(line.split(" ").map(Number))
}).on("close", () => {
    solve(data)
    process.exit()
})

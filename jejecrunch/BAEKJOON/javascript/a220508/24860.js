const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    console.log((input[2][0]*input[2][1]*input[2][2]) * (input[0][0]*input[0][1] + input[1][0]*input[1][1]))
}

const data = []

rl.on("line", (line) => {
    data.push(line.split(" ").map(Number))
}).on("close", () => {
    solve(data)
    process.exit()
})

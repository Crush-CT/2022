const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const [V, E] = data
    console.log(2 - V + E)
}

let count = 0,
    N = 0

rl.on("line", (line) => {
    if (count == 0) N = +line
    else solve(line.split(" ").map(Number))
    count++
}).on("close", () => {
    process.exit()
})

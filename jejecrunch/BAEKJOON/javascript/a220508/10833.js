const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    total += input[1] % input[0]
}

let count = 0,
    N = 0,
    total = 0

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == N + 1) rl.close()
    else solve(line.split(" ").map(Number))
    count++
}).on("close", () => {
    console.log(total)
    process.exit()
})

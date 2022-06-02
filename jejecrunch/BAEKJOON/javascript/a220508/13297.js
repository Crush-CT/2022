const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    console.log(data.length)
}

let count = 0,
    N = 0

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else solve(line)
    count++
}).on("close", () => {
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
let count = 0,
    N = 0

function solve(data) {
    console.log("$" + (data * 0.8).toFixed(2))
}

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else solve(+line)
    count++
}).on("close", () => {
    process.exit()
})

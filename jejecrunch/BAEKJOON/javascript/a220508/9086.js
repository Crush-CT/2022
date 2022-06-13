const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    console.log(data[0] + data[data.length - 1])
}

let count = 0,
    N = 0

rl.on("line", (line) => {
    if (count == 0) N = +line
    else solve(line)
    count++
}).on("close", () => {
    process.exit()
})

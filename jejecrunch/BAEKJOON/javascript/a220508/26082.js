const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const stand = Math.floor(input[1] / input[0]) * 3

    console.log(stand * input[2])
}

rl.on("line", (line) => {
    solve(line.split(" ").map(Number))
    process.exit()
})

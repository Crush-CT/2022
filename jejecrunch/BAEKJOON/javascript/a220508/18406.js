const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const front = input
        .slice(0, Math.floor(input.length / 2))
        .split("")
        .reduce((a, c) => a + +c, 0)
    const back = input
        .slice(Math.floor(input.length / 2))
        .split("")
        .reduce((a, c) => a + +c, 0)

    if (front === back) console.log("LUCKY")
    else console.log("READY")
}

rl.on("line", (line) => {
    solve(line)
}).on("close", () => {
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    console.log(`A`)
}

rl.on("line", (line) => {
    solve(+line)
    process.exit()
})

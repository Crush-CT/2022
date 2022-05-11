const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let level = 0
    let blocks = 0
    while (blocks <= input) {
        blocks += level * level + (level + 1) * (level + 1)
        level++
    }

    console.log(level - 1)
}

let N = 0

rl.on("line", (line) => {
    N = +line
}).on("close", () => {
    solve(N)
    process.exit()
})

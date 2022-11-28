const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    for (let i = 1; i <= input; i++) console.log(`Case ${i}: Sorting... done!`)
}

let count = 0

rl.on("line", (line) => {
    if (line == "0") rl.close()
    else count++
}).on("close", () => {
    solve(count)
    process.exit()
})

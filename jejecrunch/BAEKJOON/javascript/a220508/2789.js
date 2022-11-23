const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const res = []
    Array.from(input).forEach((v) => ("CAMBRIDGE".indexOf(v) > -1 ? v : res.push(v)))
    console.log(res.join(""))
}

rl.on("line", (line) => {
    solve(line)

    process.exit()
})

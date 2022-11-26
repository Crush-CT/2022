const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const res = data.split(",").length
    console.log(res)
}

rl.on("line", (line) => {
    solve(line)
    process.exit()
})

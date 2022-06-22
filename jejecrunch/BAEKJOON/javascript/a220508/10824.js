const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    console.log(+(input[0] + input[1]) + +(input[2] + input[3]))
}

rl.on("line", (line) => {
    solve(line.split(" "))
}).on("close", () => {
    process.exit()
})

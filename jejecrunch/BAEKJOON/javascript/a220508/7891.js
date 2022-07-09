const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    console.log(input[0] + input[1])
}

let count = 0, N = 0


rl.on("line", (line) => {
    if(count == 0) N = +line
    else solve(line.split(" ").map(Number))
    count++
}).on("close", () => {
    process.exit()
})

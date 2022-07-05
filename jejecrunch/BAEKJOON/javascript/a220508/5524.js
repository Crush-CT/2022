const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    console.log(input.toLowerCase())
}

let count = 0
rl.on("line", (line) => {
    if(count == 0) {}
    else solve(line)
    count++
}).on("close", () => {
    process.exit()
})

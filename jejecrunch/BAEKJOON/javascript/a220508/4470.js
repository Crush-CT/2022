const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0

function solve(data) {
    console.log(count + ". "+data)
}

rl.on("line", (line) => {
    if(count == 0) {}
    else solve(line)
    count++
}).on("close", () => {
    process.exit()
})

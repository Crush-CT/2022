const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    console.log(Math.floor(input[0] / input[1])+" "+input[0]%input[1]+" / "+input[1])
}

rl.on("line", (line) => {
    if (line == "0 0") rl.close()
    else solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})

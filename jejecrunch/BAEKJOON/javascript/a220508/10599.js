const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const [a, b, c, d] = input
    console.log((c-b) + " "+(d-a));
}

rl.on("line", (line) => {
    if(line == "0 0 0 0") rl.close()
    solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})

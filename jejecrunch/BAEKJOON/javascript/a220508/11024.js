const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const result = data.reduce((a, c) => a + c, 0)
    console.log(result)
}
let count = 0
rl.on("line", (line) => {
    if (count > 0) solve(line.split(" ").map(Number))
    count++
}).on("close", () => {
    process.exit()
})

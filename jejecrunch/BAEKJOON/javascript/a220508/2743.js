const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    console.log(data.length)
}
rl.on("line", (line) => {
    solve(line)
    rl.close()
}).on("close", () => {
    process.exit()
})

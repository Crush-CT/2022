const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
function solve(num) {
    console.log((num[0] / num[1]).toFixed(2))
}
rl.on("line", (line) => {
    solve(line.split(" "))
}).on("close", () => {
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const res = input.split("-").map((v) => v[0])
    console.log(res.join(""))
}
rl.on("line", (line) => {
    solve(line)
}).on("close", () => {
    process.exit()
})

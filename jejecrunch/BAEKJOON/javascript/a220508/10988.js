const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const cutIdx =
        input.length % 2 === 0 ? Math.floor(input.length / 2) : Math.floor(input.length / 2) + 1
    const front = input.slice(0, Math.floor(input.length / 2))
    const back = input.slice(cutIdx).split("").reverse().join("")

    console.log(front === back ? 1 : 0)
}
rl.on("line", (line) => {
    solve(line)
}).on("close", () => {
    process.exit()
})

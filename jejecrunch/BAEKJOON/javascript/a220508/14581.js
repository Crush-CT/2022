const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const arr = [
        [":fan:", ":fan:", ":fan:"],
        [":fan:", ":fan:", ":fan:"],
        [":fan:", ":fan:", ":fan:"],
    ]
    arr[1][1] = `:${input}:`
    console.log(arr.map((v) => v.join("")).join("\n"))
}

rl.on("line", (line) => {
    solve(line)
}).on("close", () => {
    process.exit()
})

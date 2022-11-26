const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let arr = []

for (let i = 0; i < 20; i++) arr.push(i + 1)

function solve(input) {
    const N = +input.shift()

    while (input.length !== 0) {
        const P = +input.shift()
        const players = input.splice(0, P).sort((a, b) => b[0] - a[0])

        console.log(players[0][1])
    }
}

const data = []

rl.on("line", (line) => {
    data.push(line.split(" "))
}).on("close", () => {
    solve(data)
    process.exit()
})

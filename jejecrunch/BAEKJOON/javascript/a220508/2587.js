const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve() {
    const total = data.reduce((a, c) => a + c, 0)
    const center = [...data].sort((a, b) => a - b)[Math.floor(data.length / 2)]

    console.log(Math.floor(total / data.length))
    console.log(center)
}

const data = []
rl.on("line", (line) => {
    data.push(+line)
}).on("close", () => {
    solve()
    process.exit()
})

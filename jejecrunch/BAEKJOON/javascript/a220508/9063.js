const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    data = data.sort((a, b) => a[0] - b[0])
    const W = data[data.length - 1][0] - data[0][0]
    data = data.sort((a, b) => a[1] - b[1])
    const H = data[data.length - 1][1] - data[0][1]
    console.log(W * H)
}

let count = 0,
    N = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else data.push(line.split(" "))
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})

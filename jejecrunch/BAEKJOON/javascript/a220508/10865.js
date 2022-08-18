const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const res = new Array(N + 1).fill(0)

    for (let i = 0; i < M; i++) {
        res[input[i][0]]++
        res[input[i][1]]++
    }

    console.log(res.slice(1).join("\n"))
}

let count = 0,
    N = 0,
    M = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) [N, M] = line.split(" ").map(Number)
    else data.push(line.split(" "))
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})

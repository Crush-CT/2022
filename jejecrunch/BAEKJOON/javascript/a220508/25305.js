const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const [N, k] = input.shift()

    input = input[0].sort((a, b) => b - a)
    let count = 1,
        min = input[0]

    for (let i = 1; i < N; i++) {
        if (count === k) break

        min = Math.min(input[i], min)
        count++
    }

    console.log(min)
}

const data = []

rl.on("line", (line) => {
    data.push(line.split(" ").map(Number))
}).on("close", () => {
    solve(data)
    process.exit()
})

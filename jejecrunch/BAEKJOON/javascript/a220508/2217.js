const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve([n, ...weight]) {
    weight.sort((a, b) => a - b)
    let max = 0
    for (let i = n - 1; i >= 0; i--) {
        weight[i] = weight[i] * (n - i)
        if (max < weight[i]) max = weight[i]
    }

    console.log(max)
}

const data = []

rl.on("line", (line) => {
    data.push(+line)
}).on("close", () => {
    solve(data)
    process.exit()
})

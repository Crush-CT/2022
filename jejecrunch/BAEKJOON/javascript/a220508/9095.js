const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dp = new Array(11).fill(0)

dp[1] = 1
dp[2] = 2
dp[3] = 4

for (let i = 4; i < 11; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1]
}

function solve(data) {
    data.map((v) => console.log(dp[v]))
}

let count = 0,
    T = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) T = Number(line)
    else if (count == T + 1) rl.close()
    else data.push(+line)
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(n, wine) {
    if (n === 1) return wine[0]
    else if (n === 2) return wine[0] + wine[1]
    const dp = new Array(n).fill(0)
    dp[1] = wine[0]
    dp[2] = wine[0] + wine[1]
    for (let i = 3; i <= n; i++) {
        dp[i] = Math.max(dp[i - 3] + wine[i - 2] + wine[i - 1], dp[i - 2] + wine[i - 1], dp[i - 1])
    }
    return dp[n]
}

let count = 0,
    N = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else data.push(+line)
    count++
}).on("close", () => {
    console.log(solve(N, data))
    process.exit()
})

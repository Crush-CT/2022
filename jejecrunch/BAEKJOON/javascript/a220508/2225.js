const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0,
    K = 0

let dp = []
const MOD = 1000000000

function solve(n, k) {
    for (let i = 2; i <= k; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = dp[i - 1].slice(0, j + 1).reduce((a, c) => a + c) % MOD
        }
    }

    console.log(dp[k][n])
}

rl.on("line", (line) => {
    ;[N, K] = line.split(" ").map(Number)
    for (let i = 1; i <= K; i++) {
        dp[i] = new Array(N + 1).fill(i === 1 ? 1 : 0)
        dp[i][0] = 1
    }
}).on("close", () => {
    solve(N, K)
    process.exit()
})

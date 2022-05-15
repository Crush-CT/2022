const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
let input = []
let count = 0,
    N = 0

function solve(dp) {
    let max = dp[0]

    for (let i = 1; i <= N; i++) {
        if (dp[i - 1] > 0 && dp[i] + dp[i - 1] > 0) dp[i] += dp[i - 1]

        if (max < dp[i]) max = dp[i]
    }

    console.log(max)
}

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == N + 1) rl.close()
    else input = line.split(" ").map(Number)
    count++
}).on("close", () => {
    solve(input)
    process.exit()
})

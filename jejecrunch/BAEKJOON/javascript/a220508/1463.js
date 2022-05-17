const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dp = new Array(1000001)
;(dp[0] = 0), (dp[1] = 0)

function solve(data) {
    for (let i = 2; i <= data; i++) {
        dp[i] = dp[i - 1] + 1

        if (i % 2 == 0) dp[i] = Math.min(dp[i], dp[Math.floor(i / 2)] + 1)
        if (i % 3 == 0) dp[i] = Math.min(dp[i], dp[Math.floor(i / 3)] + 1)
    }
    console.log(dp[data])
}

rl.on("line", (line) => {
    solve(+line)
    rl.close()
}).on("close", () => {
    process.exit()
})

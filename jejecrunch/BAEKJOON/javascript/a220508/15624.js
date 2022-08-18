const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dp = new Array(1000001).fill(0n)
dp[1] = dp[2] = 1n

function solve(data) {
    for (let i = 3; i < data + 1; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007n
    }
    console.log(dp[data] + "")
}

rl.on("line", (line) => {
    solve(+line)
}).on("close", () => {
    process.exit()
})

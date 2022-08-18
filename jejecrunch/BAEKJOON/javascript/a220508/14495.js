const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dp = new Array(117).fill(0n)
dp[1] = dp[2] = dp[3] = 1n

for (let i = 3; i < 117; i++) {
    dp[i] = dp[i - 1] + dp[i - 3]
}

function solve(data) {
    console.log(dp[data] + "")
}

rl.on("line", (line) => {
    solve(+line)
}).on("close", () => {
    process.exit()
})

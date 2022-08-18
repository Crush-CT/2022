const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dp = new Array(36).fill(0n)
dp[0] = 1n

for (let i = 1; i < 36; i++) {
    for (let j = 0; j <= i - 1; j++) {
        dp[i] += dp[j] * dp[i - 1 - j]
    }
}

function solve(data) {
    console.log(dp[data] + "")
}
rl.on("line", (line) => {
    solve(+line)
}).on("close", () => {
    process.exit()
})

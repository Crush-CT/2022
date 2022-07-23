const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dp = new Array(91).fill(0n, 1, 2).fill(1n, 1, 3)

for (let i = 3; i < 91; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
}

function solve(n) {
    console.log(dp[n] + "")
}

rl.on("line", (line) => {
    solve(line)
}).on("close", () => {
    process.exit()
})

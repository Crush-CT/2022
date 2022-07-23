const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dp = new Array(11).fill(0, 0, 2).fill(1, 2, 3)

for (let i = 3; i <= 11; i++) {
    dp[i] = dp[i - 1] + (i - 1)
}

function solve(n) {
    console.log(dp[n])
}

rl.on("line", (line) => {
    solve(line)
}).on("close", () => {
    process.exit()
})

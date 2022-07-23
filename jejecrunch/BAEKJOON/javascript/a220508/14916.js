const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let dp = new Array(99993).fill(0n)
dp = [-1n, -1n, 1n, -1n, 2n, 1n, 3n, 2n, 4n, 3n, ...dp]

for (let i = 10; i <= 100001; i++) {
    dp[i] = dp[i - 5] + 1n
}

function solve(n) {
    console.log(dp[n] + "")
}

rl.on("line", (line) => {
    solve(line)
}).on("close", () => {
    process.exit()
})

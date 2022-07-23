const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dp = []

for (let i = 0; i < 31; i++) {
    const row = []
    for (let j = 0; j < i + 1; j++) {
        if (j == 0 || j == i) row.push(1)
        else {
            row.push(dp[i - 1][j - 1] + dp[i - 1][j])
        }
    }
    dp.push(row)
}

function solve(input) {
    const [n, k] = input
    console.log(dp[n - 1][k - 1])
}

rl.on("line", (line) => {
    solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(n) {
    if (n % 2 === 1) return 0
    const dp = new Array(n + 1).fill(0)
    dp[2] = 3
    if (n === 2) return dp[2]

    for (let i = 3; i <= n; i++) {
        if (i % 2 === 0) {
            dp[i] = dp[i - 2] * 3 + 2
            k = i - 2
            while (k >= 2) {
                dp[i] = dp[i] + dp[k - 2] * 2
                k -= 2
            }
        }
    }

    return dp[n]
}

rl.on("line", (line) => {
    let answer = solve(line)
    console.log(answer)
}).on("close", () => {
    process.exit()
})

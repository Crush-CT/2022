const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dp = new Array(1001).fill(new Array(10))

function solve(data) {
    let ans = 0

    for (let i = 0; i < 10; i++) {
        dp[1][i] = 1
    }

    for (let i = 2; i <= data; i++) {
        for (let j = 0; j < 10; j++) {
            if (j == 0) {
                dp[i][0] = 1
                continue
            }
            dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 10007
        }
    }

    for (let i = 0; i < 10; i++) {
        ans += dp[data][i]
    }
    ans %= 10007

    console.log(ans)
}

rl.on("line", (line) => {
    solve(+line)
    rl.close()
}).on("close", () => {
    process.exit()
})

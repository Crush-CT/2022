const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dp = new Array(100001)
dp[0] = 0
dp[1] = 1

function solve(input) {
    for (let i = 0; i <= input; i++) dp[i] = i
    for (let i = 1; i <= input; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
        }
    }

    console.log(dp[input])
}

rl.on("line", (line) => {
    solve(+line)
}).on("close", () => {
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N
const dp = new Array(10001).fill(1)

dp[0] = 1

for (let i = 2; i <= 3; i++) {
    for (let j = i; j <= 10001; j++) {
        dp[j] += dp[j - i]
    }
}

function solve(v) {
    console.log(dp[v])
}

rl.on("line", (line) => {
    if (!N) N = +line
    else solve(line)
}).on("close", () => {
    process.exit()
})

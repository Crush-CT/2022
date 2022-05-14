const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const dp = new Array(N)
    for (let i = 0; i < N; i++) {
        dp[i] = data[i]
    }

    for (let i = 1; i < N; i++) {
        for (let j = 0; j <= i; j++) {
            let prev
            if (j === 0) prev = dp[i - 1][j]
            else if (j === i) prev = dp[i - 1][j - 1]
            else prev = Math.max(dp[i - 1][j - 1], dp[i - 1][j])
            dp[i][j] += prev
        }
    }
    console.log(Math.max(...dp[N - 1]))
}

let count = 0,
    N = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else {
        data.push(line.split(" ").map(Number))
    }
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})

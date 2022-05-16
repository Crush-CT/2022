const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(array) {
    const dp = new Array(N).fill(array[0], 0, 1)

    for (let i = 1; i < 3; i++) {
        if (i == 1) {
            dp[i] = Math.max(dp[i - 1] + array[i], array[i])
        } else {
            dp[i] = Math.max(dp[i - 2] + array[i], array[i - 1] + array[i])
        }
    }

    for (let i = 3; i < N; i++) {
        dp[i] = Math.max(dp[i - 2] + array[i], dp[i - 3] + array[i] + array[i - 1])
    }

    console.log(dp[N - 1])
}

let count = 0,
    N = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else data.push(+line)
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})

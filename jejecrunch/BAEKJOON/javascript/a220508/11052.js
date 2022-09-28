const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let dp = [0, ...data]
    for (let i = 2; i < dp.length; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] + dp[j])
        }
    }

    console.log(dp[T])
}

let count = 0,
    T = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) T = Number(line)
    else if (count == T + 1) rl.close()
    else data = line.split(" ").map(Number)
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})

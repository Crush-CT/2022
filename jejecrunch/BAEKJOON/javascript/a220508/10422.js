const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const N = input.shift()
    const dp = new Array(5001).fill(BigInt(0))
    dp[0] = 1n
    dp[2] = 1n

    for (let i = 2; i <= 2500; i++) {
        for (let j = 0; j <= i - 1; j++) {
            dp[i * 2] += dp[j * 2] * dp[(i - 1 - j) * 2]
            dp[i * 2] %= 1000000007n
        }
    }

    let res = []
    for (let i = 0; i < N; i++) {
        res.push(dp[input[i]] + "")
    }

    console.log(res.join("\n"))
}

const data = []
rl.on("line", (line) => {
    data.push(+line)
}).on("close", () => {
    solve(data)
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let dp

function solve(data) {
    data = [null, ...data]
    dp = new Array(N + 1)

    for (let i = 1; i <= N; i++) {
        dp[i] = data[i][1]
    }

    for (let i = 2; i <= N; i++) {
        for (let j = 1; j < i; j++) {
            if (i - j >= data[j][0]) {
                dp[i] = Math.max(data[i][1] + dp[j], dp[i])
            }
        }
    }

    let max = 0
    for (let i = 1; i <= N; i++) {
        if (i + data[i][0] <= N + 1) {
            max = max < dp[i] ? dp[i] : max
        }
    }
    console.log(max)
}
let count = 0,
    data = []
rl.on("line", (line) => {
    if (count == 0) N = +line
    else data.push(line.split(" ").map(Number))
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})

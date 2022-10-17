const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const dp = new Array(N).fill(0)
    for (let i = 0; i < N; i++) {
        let max = 0
        for (let j = 0; j < i; j++) {
            if (data[i] < data[j] && dp[j] > max) {
                max = dp[j]
            }
        }
        dp[i] = max + 1
    }

    const res = Math.max(...dp)
    console.log(res)
}

let count = 0,
    N = 0
rl.on("line", (line) => {
    if (count == 0) N = +line
    else solve([...line.split(" ").map(Number)])
    count++
}).on("close", () => {
    process.exit()
})

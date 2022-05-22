const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const dp = new Array(1010).fill(1)
    let answer = 1
    for (let i = 1; i < N + 1; i++) {
        for (let j = i - 1; j > 0; j--) {
            if (data[i] > data[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
        }
        answer = Math.max(dp[i], answer)
    }

    console.log(answer)
}

let count = 0,
    N = 0
rl.on("line", (line) => {
    if (count == 0) N = +line
    else solve([0, ...line.split(" ").map(Number)])
    count++
}).on("close", () => {
    process.exit()
})

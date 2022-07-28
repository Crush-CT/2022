const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dp = new Array(1000001)
;(dp[1] = 1), (dp[2] = 2), (dp[3] = 4)

for (let i = 4; i <= 1000000; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009
}

let count = 0

rl.on("line", (line) => {
    if (count != 0) {
        console.log(dp[+line] % 1000000009)
    }
    count++
}).on("close", () => {
    process.exit()
})

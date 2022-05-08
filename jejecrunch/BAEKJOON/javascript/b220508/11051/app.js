const fs = require("fs")
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt"

const [N, K] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map((v) => +v)

const dp = Array.from(Array(N + 1), () => new Array(N + 1).fill(0))
dp[0][0] = dp[1][0] = dp[1][1] = 1

for (let i = 2; i <= N; i++) {
    for (let j = 0; j <= K; j++) {
        if (i == j || j == 0) dp[i][j] = 1
        else dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - 1]) % 10007
    }
}

console.log(dp[N][K])

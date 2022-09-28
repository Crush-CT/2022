const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const MOD = 1000000009
const SIZE = 100000
const dp = Array.from({ length: SIZE + 1 }, () => new Array(4).fill(0))

// for 문에서 i-1 ~ i-3이 무난하게 동작하기 위해 n=1,2,3 값을 채운다.
dp[1][1] = dp[2][2] = dp[3][1] = dp[3][2] = dp[3][3] = 1
for (let i = 4; i < SIZE + 1; i++) {
    dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % MOD
    dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % MOD
    dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % MOD
}

function solve(data) {
    let answer = ""
    data.map((v) => (answer += `${(dp[v][1] + dp[v][2] + dp[v][3]) % MOD}\n`))
    console.log(answer)
}

let count = 0,
    T = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) T = Number(line)
    else if (count == T + 1) rl.close()
    else data.push(+line)
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N,
    M,
    data = []
const dp = [],
    dx = [1, 0, 1],
    dy = [0, 1, 1]

function dfs(x, y) {
    if (dp[x][y] != -1) return dp[x][y]
    if (x == N - 1 && y == M - 1) return data[x][y]

    for (let d = 0; d < 3; d++) {
        const nx = x + dx[d],
            ny = y + dy[d]

        if (nx < 0 || nx > N - 1 || ny < 0 || ny > M - 1) continue

        dp[x][y] = Math.max(dp[x][y], dfs(nx, ny) + data[x][y])
    }

    return dp[x][y]
}

function solve() {
    for (let i = 0; i < N; i++) {
        dp.push(new Array(M).fill(-1))
    }

    console.log(dfs(0, 0))
}

rl.on("line", (line) => {
    if (!N && !M) [N, M] = line.split(" ").map(Number)
    else data.push(line.split(" ").map(Number))
}).on("close", () => {
    solve()
    process.exit()
})

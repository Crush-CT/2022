const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const data = []

function BFS(N, S, M, V) {
    // 인덱서, 노래수, 시작볼륨, 최대볼륨, 볼륨리스트.
    let answer = -1

    let dp = new Array(51).fill(null).map((_) => new Array(1001).fill(false))
    dp[0][S] = true

    for (let i = 1; i <= N; i++) {
        for (let j = 0; j <= M; j++) {
            if (!dp[i - 1][j]) {
                continue
            }
            if (j - V[i - 1] >= 0) {
                dp[i][j - V[i - 1]] = true
            }
            if (j + V[i - 1] <= M) {
                dp[i][j + V[i - 1]] = true
            }
        }
    }
    for (let i = 0; i <= M; i++) {
        if (dp[N][i]) {
            if (i > answer) answer = i
        }
    }

    return answer
}

function solve(input) {
    const [N, S, M] = input.shift()

    let answer = BFS(N, S, M, input[0])

    console.log(answer)
}

rl.on("line", (line) => {
    data.push(line.split(" ").map(Number))
}).on("close", () => {
    solve(data)
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const check = new Array(N).fill(false)
    let min = Number.MAX_SAFE_INTEGER

    function dfs(L, K) {
        if (L == N / 2) {
            const sTeam = []
            const lTeam = []
            let sSum = (lSum = 0)
            for (let i = 0; i < N; i++) {
                if (check[i]) sTeam.push(i)
                else lTeam.push(i)
            }
            for (let i = 0; i < N / 2; i++) {
                for (let j = i + 1; j < N / 2; j++) {
                    // (i,j), (j,i) 쌍을 계속 더해준다.
                    sSum = sSum + input[sTeam[i]][sTeam[j]] + input[sTeam[j]][sTeam[i]]
                    lSum = lSum + input[lTeam[i]][lTeam[j]] + input[lTeam[j]][lTeam[i]]
                }
            }
            min = Math.min(min, Math.abs(sSum - lSum))
            return
        }

        for (let i = K; i < N; i++) {
            // 체크 배열을 스타트 팀 구성에 사용한다.
            check[i] = 1
            dfs(L + 1, i + 1)
            check[i] = 0
        }
    }

    dfs(0, 0)
    console.log(min)
}

let count = 0
let N = 0
let data = []

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == N + 1) rl.close()
    else data.push(line.split(" ").map(Number))
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})

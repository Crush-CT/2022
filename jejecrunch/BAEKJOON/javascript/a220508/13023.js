const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0,
    N = 0,
    M = 0,
    data = [],
    adj = [],
    check = [],
    flag = 0

function dfs(L, cnt) {
    check[L] = 1
    if (flag) return
    if (cnt === 4) {
        flag = 1
        return
    }

    for (let i = 0; i < adj[L].length; i++) {
        const next = adj[L][i]
        if (!check[next]) {
            dfs(next, cnt + 1)
        }
    }

    check[L] = 0
}

function solve(data) {
    adj = Array.from({ length: N }, () => Array(0))
    check = new Array(N).fill(0)

    for (let i = 0; i < M; i++) {
        const [a, b] = data[i]
        adj[a].push(b)
        adj[b].push(a)
    }

    for (let i = 0; i < N; i++) dfs(i, 0)

    return flag
}

rl.on("line", (line) => {
    if (count === 0) [N, M] = line.split(" ").map(Number)
    else data.push(line.split(" ").map(Number))
    count++
}).on("close", () => {
    const res = solve(data)
    console.log(res)
    process.exit()
})

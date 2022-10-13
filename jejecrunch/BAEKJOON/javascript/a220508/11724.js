const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0,
    M = 0,
    data = []

function solve(data) {
    const visited = new Array(N + 1).fill(false)

    const edge = Array.from({ length: N + 1 }, () => Array())

    for (let i = 0; i < M; i++) {
        const [from, to] = data[i]
        edge[from].push(to)
        edge[to].push(from)
    }

    function dfs(start) {
        visited[start] = true

        for (let i = 0; i < edge[start].length; i++) {
            const next = edge[start][i]

            if (!visited[next]) {
                dfs(next)
            }
        }
    }

    let count = 0
    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            dfs(i)
            count++
        }
    }

    console.log(count)
}

rl.on("line", (line) => {
    if (!N && !M) [N, M] = line.split(" ").map(Number)
    else data.push(line.split(" ").map(Number))
}).on("close", () => {
    solve(data)
    process.exit()
})

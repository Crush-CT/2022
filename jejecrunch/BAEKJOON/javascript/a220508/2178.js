const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0,
    M = 0,
    data = [],
    visited = [],
    dy = [1, -1, 0, 0],
    dx = [0, 0, 1, -1]

function main() {
    const graph = []
    for (let i = 0; i < N; i++) {
        graph[i] = [...data[i]]
        visited[i] = new Array(M).fill(0)
    }

    function bfs(i, j) {
        const q = []
        q.push({ y: i, x: j })
        visited[i][j] = 1

        while (q.length) {
            const { y, x } = q.shift()
            for (let i = 0; i < 4; i++) {
                const nextY = y + dy[i]
                const nextX = x + dx[i]
                if (nextY >= 0 && nextY < N && nextX >= 0 && nextX < M) {
                    if (!visited[nextY][nextX] && graph[nextY][nextX]) {
                        visited[nextY][nextX] = visited[y][x] + 1
                        q.push({ y: nextY, x: nextX })
                    }
                }
            }
        }
    }

    bfs(0, 0)
    console.log(visited[N - 1][M - 1])
}

rl.on("line", (line) => {
    if (!N && !M) [N, M] = line.split(" ").map(Number)
    else {
        data.push(line.split("").map(Number))
        if (data.length === N) {
            main()
            data = []
        }
    }
})

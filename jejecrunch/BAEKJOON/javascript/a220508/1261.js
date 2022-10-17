const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0,
    M = 0,
    data = [],
    visited = [],
    dx = [-1, 0, 1, 0],
    dy = [0, 1, 0, -1]

function main() {
    visited = Array.from(Array(M), () => Array(N).fill(0))

    const q = []
    visited[0][0] = 1
    q.push([0, 0, 0])

    while (q.length) {
        const [x, y, cnt] = q.shift()
        if (x === M - 1 && y === N - 1) return cnt
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]
            if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue

            if (!visited[nx][ny] && data[nx][ny] === 0) {
                visited[nx][ny] = 1
                q.unshift([nx, ny, cnt])
            }

            if (!visited[nx][ny] && data[nx][ny] === 1) {
                visited[nx][ny] = 1
                q.push([nx, ny, cnt + 1])
            }
        }
    }
}

rl.on("line", (line) => {
    if (!N && !M) [N, M] = line.split(" ").map(Number)
    else {
        data.push(line.split("").map(Number))
        if (data.length === M) {
            const res = main()
            console.log(res)
            data = []
        }
    }
})

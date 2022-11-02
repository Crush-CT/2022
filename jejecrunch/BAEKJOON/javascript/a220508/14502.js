const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N,
    M,
    ans = Number.MIN_SAFE_INTEGER
const data = [],
    dx = [0, 0, 1, -1],
    dy = [1, -1, 0, 0]

const countingSafeZone = (arr) => {
    let cnt = 0
    let queue = []

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (arr[i][j] === 2) queue.push([i, j])
        }
    }

    while (queue.length) {
        const [curX, curY] = queue.shift()

        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [curX + dx[i], curY + dy[i]]

            if (nx >= 0 && nx < N && ny >= 0 && ny < M && arr[nx][ny] === 0) {
                arr[nx][ny] = 2
                queue.push([nx, ny])
            }
        }
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (arr[i][j] === 0) {
                cnt += 1
            }
        }
    }

    return cnt
}

const dfs = (cnt) => {
    if (cnt === 3) {
        let arr = data.map((v) => [...v])
        let cntOfSafe = countingSafeZone(arr)

        ans = Math.max(ans, cntOfSafe)
        return
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (data[i][j] === 0) {
                data[i][j] = 1
                dfs(cnt + 1)
                data[i][j] = 0
            }
        }
    }
}

function solve() {
    dfs(0)
    console.log(ans)
}

rl.on("line", (line) => {
    if (!N && !M) [N, M] = line.split(" ").map(Number)
    else {
        data.push(line.split(" ").map(Number))
    }
}).on("close", () => {
    solve()
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N,
    M,
    data = [],
    coinPosition = [],
    min = Number.MAX_SAFE_INTEGER

const dx = [-1, 0, 1, 0],
    dy = [0, 1, 0, -1]

function checkDrop(x, y) {
    // 떨어지면 참, 떨어지지 않았으면 거짓
    if (x < 0 || y < 0 || x >= N || y >= M) return true
    return false
}

function checkWall(x, y, idx) {
    const [nx, ny] = [x + dx[idx], y + dy[idx]]
    if (data[nx]) {
        if (data[nx][ny] === "#") return [x, y]
    }
    return [nx, ny]
} // 중요한 부분. 먼저 행이 존재하는지를 검사한다.(board[-1][2]는 undefined의 2번 인덱스를 참조하려 하기 때문에 에러가 발생한다.)

function dfs(cnt, x1, y1, x2, y2) {
    if (cnt >= min) return // 없어도 정답은 나온다. 하지만 10이하의 min값이 나왔다면 더 빠르게 돌아간다.
    if (cnt > 10) return
    if (checkDrop(x1, y1) && checkDrop(x2, y2)) return
    if (checkDrop(x1, y1) || checkDrop(x2, y2)) {
        // 둘 중 하나만 참일 때만이 최솟값을 갱신할 수 있다.
        min = Math.min(min, cnt)
        return
    }
    for (let i = 0; i < 4; i++) {
        const [nx1, ny1] = checkWall(x1, y1, i) // 벽이 있으면 (x,y), 벽이 없다면 이동 가능하므로 (nx,ny)
        const [nx2, ny2] = checkWall(x2, y2, i) // 단, (nx,ny)가 보드 바깥일 수도 있지만, 다음 재귀에서 판별할 것이기 때문에 상관x
        dfs(cnt + 1, nx1, ny1, nx2, ny2)
    }
}

function solve() {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (data[i][j] === "o") coinPosition.push([i, j])
        }
    }

    dfs(0, coinPosition[0][0], coinPosition[0][1], coinPosition[1][0], coinPosition[1][1])
    if (min === Number.MAX_SAFE_INTEGER) {
        console.log(-1)
        return
    } // 최솟값이 갱신되지 않았다면!
    console.log(min)
}

rl.on("line", (line) => {
    if (!N && !M) [N, M] = line.split(" ").map(Number)
    else data.push(line.split(""))
}).on("close", () => {
    solve()
    process.exit()
})

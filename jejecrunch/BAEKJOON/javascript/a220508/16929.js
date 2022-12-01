const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N,
    M,
    data = []

function solve() {
    const check = Array.from({ length: N }, () => Array(M).fill(0)) // 방문 여부를 조회할 배열
    const dx = [-1, 0, 1, 0] // 동서남북 좌표 이동
    const dy = [0, 1, 0, -1]
    let flag = 0 // 재귀 탈출을 위한 플래그

    function dfs(x, y, cnt) {
        if (flag) return

        for (let i = 0; i < 4; i++) {
            const [nx, ny] = [x + dx[i], y + dy[i]]
            if (nx <= -1 || ny <= -1 || nx >= N || ny >= M) continue // 게임판의 인덱스가 아니라면 패스
            if (data[nx][ny] !== data[start.x][start.y]) continue // 시작한 색과 다르다면 패스
            if (!check[nx][ny]) {
                // 방문하지 않았다면 방문하고, 재귀가 끝나면 방문을 해제해 줘야 함.
                check[nx][ny] = 1
                dfs(nx, ny, cnt + 1)
                check[nx][ny] = 0
                continue
            } else if (cnt >= 4 && nx === start.x && ny === start.y) {
                flag = 1 // 방문한 노드가 4개 이상, 이동하려는 좌표가 시작한 좌표라면 사이클이므로 재귀 탈출
                return
            }
        }
    }

    let start
    for (let x = 0; x < N; x++) {
        for (let y = 0; y < M; y++) {
            start = { x, y }
            check[x][y] = 1 // (0,0) ~ (N-1,M-1)까지 조회해야 하므로 방문했다면 방문을 해제해줘야 한다.
            dfs(x, y, 1)
            check[x][y] = 0
            if (flag) break // 사이클을 발견했다면 탈출한다.
        }
    }
    console.log(flag ? "Yes" : "No") // 사이클을 발견했으면 Yes 리턴, 사이클이 없다면 No 리턴
}

rl.on("line", (line) => {
    if (!N && !M) [N, M] = line.split(" ").map(Number)
    else {
        data.push(line.split(""))
    }
}).on("close", () => {
    solve()
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N, M
const data = [],
    visited = new Array(101).fill(-1)

function bfs(board) {
    let q = []
    q.push(1) // 시작칸은 1이다.
    visited[1] = 0

    while (q.length !== 0) {
        let cur = q.shift()

        for (let dice = 1; dice <= 6; dice++) {
            let next = cur + dice // 주사위를 굴려서 나아갈 수 있는 칸의 번호.

            if (next > 100)
                // 100을 넘어가는 일은 없다.
                continue

            next = board[next] // 해당칸에 뱀이나 사다리가 있다면 이용해야만 한다.
            if (visited[next] === -1) {
                // 아직 방문한적 없는 칸.
                visited[next] = visited[cur] + 1
                q.push(next)
            }
        }
    }
    console.log(visited[100])
}

function solve() {
    let board = new Array(101).fill(null).map((_, idx) => idx)

    for (let i = 0; i < data.length; i++) {
        // 사다리와 뱀.
        let [from, to] = data[i]
        board[from] = to
    }

    bfs(board)
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

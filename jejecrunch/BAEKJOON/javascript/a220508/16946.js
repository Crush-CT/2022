const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N, M, visited
const data = [],
    dx = [0, 0, 1, -1],
    dy = [1, -1, 0, 0]

function solve() {
    let map = Array.from(Array(N), () => Array(M))
    let w_map = Array.from(Array(N), () => Array(M).fill(-1))
    let c_map = Array.from(Array(N), () => Array(M)) //좌표값 저장
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            map[i][j] = data[i][j]
            if (data[i][j] === 0) {
                w_map[i][j] = 0
            }
        }
    }
    for (let i = 0; i < w_map.length; i++) {
        for (let j = 0; j < w_map[i].length; j++) {
            if (w_map[i][j] === 0) {
                let c_start = { x: j, y: i } //시작 좌표 값.
                w_DFS(j, i, c_start)
            }
        }
    }
    visited = Array.from(Array(N), () => Array(M).fill(false))
    let sc_arr = [] //true 해준 visited를 다시 false로
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 1) {
                fill_wall(j, i)
                back_visited()
            }
        }
    }
    let answel = ""
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            answel += `${map[i][j]}`
        }
        answel += "\n"
    }
    console.log(answel.trim())

    function w_DFS(x, y, cs) {
        //인접한 0의 경로를 계산하는 DFS
        w_map[y][x] = 1
        c_map[y][x] = cs
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]
            if (nx >= 0 && nx <= M - 1 && ny >= 0 && ny <= N - 1) {
                if (w_map[ny][nx] === 0) {
                    w_map[y][x] += w_DFS(nx, ny, cs)
                }
            }
        }
        return w_map[y][x]
    }

    function fill_wall(x, y) {
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]
            if (nx >= 0 && nx <= M - 1 && ny >= 0 && ny <= N - 1) {
                if (c_map[ny][nx] !== undefined) {
                    let sx = c_map[ny][nx].x
                    let sy = c_map[ny][nx].y
                    if (!visited[sy][sx]) {
                        visited[sy][sx] = true
                        sc_arr.push({ x: sx, y: sy })
                        map[y][x] += w_map[sy][sx]
                    }
                }
            }
        }
        map[y][x] = map[y][x] % 10
    }

    function back_visited() {
        sc_arr.map((ele) => {
            visited[ele.y][ele.x] = false
        })
        sc_arr = [] //초기화
    }
}

rl.on("line", (line) => {
    if (!N && !M) [N, M] = line.split(" ").map(Number)
    else data.push(line.split("").map(Number))
}).on("close", () => {
    solve()
    process.exit()
})

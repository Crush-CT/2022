const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N, M, r, c, d, visit
const data = []
const dx = [-1, 0, 1, 0]
const dy = [0, 1, 0, -1]

const getLeft = (dir) => {
    const result = dir - 1 < 0 ? 3 : dir - 1
    return result
}
let res

function solve(x, y, dir, cnt) {
    visit[x][y] = 1
    let flag = true
    for (let i = 0; i < 4; i++) {
        const nextPosition = getLeft(dir)
        const nx = x + dx[nextPosition]
        const ny = y + dy[nextPosition]

        if (data[nx][ny] === 0 && visit[nx][ny] === 0) {
            flag = false
            visit[nx][ny] = 1
            solve(nx, ny, nextPosition, cnt + 1)
            break
        } else {
            dir = nextPosition
        }
    }
    if (flag) {
        const backPoint = getLeft(getLeft(dir))
        const nx = x + dx[backPoint]
        const ny = y + dy[backPoint]
        if (data[nx][ny] === 1) {
            res = cnt
            return
        } else {
            solve(nx, ny, dir, cnt)
        }
    }
}

rl.on("line", (line) => {
    if (!N && !M) [N, M] = line.split(" ").map(Number)
    else if (!r && !c && !d) [r, c, d] = line.split(" ").map(Number)
    else {
        data.push(line.split(" ").map(Number))
    }
}).on("close", () => {
    visit = Array.from(Array(N + 1), () => new Array(M + 1).fill(0))
    solve(r, c, d, 1)
    console.log(res)
    process.exit()
})

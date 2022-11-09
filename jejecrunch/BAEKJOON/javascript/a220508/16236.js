const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const fishCount = [],
    offset = [
        [-1, 0],
        [0, -1],
        [0, 1],
        [1, 0],
    ]
let babySharkPos,
    babySharkSize = 2,
    eaten = 0,
    time = 0,
    edibleMaxSize = 1

function bfs(size) {
    const visited = [...Array(N)].map(() => Array(N).fill(false))
    const [defaultX, defaultY] = babySharkPos
    visited[defaultX][defaultY] = true
    let queue = [[defaultX, defaultY, 0]]
    let depth = 0
    let nextPos
    while (queue.length) {
        stack = queue
        queue = []
        while (stack.length) {
            const [x, y, elapsed] = stack.pop()

            if (data[x][y] && data[x][y] <= size) {
                if (!depth) {
                    depth = elapsed
                    nextPos = [x, y]
                } else {
                    const [nx, ny] = nextPos
                    if (nx === x) {
                        nextPos = ny < y ? nextPos : [x, y]
                    } else {
                        nextPos = nx < x ? nextPos : [x, y]
                    }
                }
            }

            for (let i = 0; i < 4; i++) {
                const nx = x + offset[i][0]
                const ny = y + offset[i][1]
                if (
                    nx >= 0 &&
                    nx < N &&
                    ny >= 0 &&
                    ny < N &&
                    !visited[nx][ny] &&
                    data[nx][ny] <= babySharkSize
                ) {
                    visited[nx][ny] = true
                    queue.push([nx, ny, elapsed + 1])
                }
            }
        }
        if (depth) {
            break
        }
    }

    if (nextPos) {
        const [nx, ny] = nextPos
        fishCount[data[nx][ny]]--
        data[nx][ny] = 0
        babySharkPos = [nx, ny]
        eaten++
        if (eaten === babySharkSize) {
            eaten = 0
            babySharkSize++
            edibleMaxSize++
        }
    }

    return depth
}

function solve() {
    data.forEach((row, x) =>
        row.forEach((size, y) => {
            if (size > 0 && size < 9) {
                fishCount[size] = (fishCount[size] ?? 0) + 1
            } else if (size === 9) {
                babySharkPos = [x, y]
                data[x][y] = 0
            }
        })
    )

    while (fishCount.some((v, i) => i <= edibleMaxSize && v > 0)) {
        const elapsed = bfs(edibleMaxSize)
        if (elapsed) {
            time += elapsed
        } else {
            break
        }
    }

    console.log(time)
}

let N
const data = []

rl.on("line", (line) => {
    if (!N) N = +line
    else data.push(line.split(" ").map(Number))
}).on("close", () => {
    solve()
    process.exit()
})

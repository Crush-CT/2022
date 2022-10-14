const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0,
    M = 0,
    box = [],
    queue = [],
    index = 0

function main() {
    let day = 0
    function bfs() {
        const dx = [-1, 0, 1, 0],
            dy = [0, 1, 0, -1]

        let prev = 0

        while (true) {
            const cur = queue.length
            let change = 0

            for (let i = prev; i < cur; i++) {
                const [x, y] = queue[i]
                for (let j = 0; j < 4; j++) {
                    const [nx, ny] = [x + dx[j], y + dy[j]]
                    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue
                    if (!box[nx][ny]) {
                        change = 1
                        box[nx][ny] = day + 1
                        queue.push([nx, ny])
                    }
                }
            }

            if (!change) break
            day++
            prev = cur
        }
    }

    bfs()

    for (let i = 0; i < N; i++) if (box[i].includes(0)) return -1

    return day
}

rl.on("line", (line) => {
    if (!N && !M) [M, N] = line.split(" ").map(Number)
    else {
        const arr = line.split(" ").map(Number)
        box.push(arr)
        let idx = -1
        while (true) {
            idx = arr.indexOf(1, idx + 1)
            if (idx === -1) break
            queue.push([index, idx])
        }
        index++
    }
}).on("close", () => {
    console.log(main())
    process.exit()
})

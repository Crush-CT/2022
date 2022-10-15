const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const visited = new Array(100001).fill(0)
const path = new Array(100001).fill(0)
let ans = []

function bfs(n, k) {
    const queue = []

    queue.push([n, 0])

    visited[n] = 1

    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const [position, time] = queue.shift()

            if (position === k) return time

            for (let nx of [position * 2, position - 1, position + 1]) {
                if (nx >= 0 && nx < 100001 && visited[nx] === 0) {
                    if (nx === position * 2) queue.unshift([nx, time])
                    else queue.push([nx, time + 1])

                    visited[nx] = 1
                }
            }
        }
    }
}

function solve([N, K]) {
    const time = bfs(N, K)

    console.log(time)
}

rl.on("line", (line) => {
    solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const visited = new Array(100001).fill(0)
const path = new Array(100001).fill(0)
let ans = []

function bfs(n, k) {
    let cnt = 0
    const queue = []

    queue.push(n)

    visited[n] = 1

    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const x = queue.shift()

            if (x === k) return cnt

            for (let nx of [x - 1, x + 1, x * 2]) {
                if (nx >= 0 && nx < 100001 && visited[nx] === 0) {
                    path[nx] = x
                    visited[nx] = 1
                    queue.push(nx)
                }
            }
        }
        cnt++
    }
}

function solve([N, K]) {
    const time = bfs(N, K)
    let before = path[K]
    ans.push(K)

    for (let i = 0; i < time; i++) {
        ans.push(before)
        before = path[before]
    }
    console.log(time + "\n" + ans.reverse().join(" "))
}

rl.on("line", (line) => {
    solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})

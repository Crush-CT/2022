const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const ch = new Array(100001).fill(0)
let ans = 0

function bfs(n, k) {
    const queue = []

    queue.push(n)
    ch[n] = 1

    let cnt = 0

    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const x = queue.shift()
            if (x === k) return cnt

            for (let nx of [x - 1, x + 1, x * 2]) {
                if (nx >= 0 && nx < 100001 && ch[nx] === 0) {
                    ch[nx] = 1
                    queue.push(nx)
                }
            }
        }

        cnt++
    }
}

function solve([N, K]) {
    ans = bfs(N, K)
    console.log(ans)
}

rl.on("line", (line) => {
    solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})

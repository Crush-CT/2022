const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let S = 0,
    check

function bfs() {
    check[1][0] = 1
    const q = []
    q.push([1, 0, 0])

    while (q.length) {
        const [now, clip, time] = q.shift()

        if (now === S) return time

        if (0 >= now || now > 1000) continue

        if (!check[now][now]) {
            check[now][now] = 1
            q.push([now, now, time + 1])
        }

        if (clip && now + clip <= 1000) {
            if (!check[now + clip][clip]) {
                check[now + clip][clip] = 1
                q.push([now + clip, clip, time + 1])
            }
        }

        if (!check[now - 1][clip]) {
            check[now - 1][clip] = 1
            q.push([now - 1, clip, time + 1])
        }
    }
}

rl.on("line", (line) => {
    S = +line
    check = Array.from({ length: 1001 }, () => Array(1001).fill(0))
}).on("close", () => {
    const res = bfs()
    console.log(res)
    process.exit()
})

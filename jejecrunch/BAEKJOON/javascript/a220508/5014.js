const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let F, S, G, U, D

function solve() {
    let visited = new Array(2000001).fill(0)
    let cnt = 0
    let flag = true
    let queue = []
    queue.push(S)
    visited[S] = 1
    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let x = queue.shift()
            if (x === G) {
                flag = false
                visited[x] = 1
                console.log(cnt)
            }
            for (let k of [x + U, x - D]) {
                if (visited[k] === 0 && k >= 1 && k <= F) {
                    visited[k] = 1
                    queue.push(k)
                }
            }
        }
        if (flag === false) {
            break
        }
        cnt++
    }
    if (flag) {
        console.log("use the stairs")
    }
}

rl.on("line", (line) => {
    ;[F, S, G, U, D] = line.split(" ").map(Number)
}).on("close", () => {
    solve()
    process.exit()
})

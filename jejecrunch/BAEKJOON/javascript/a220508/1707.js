const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let K = 0,
    data = []

function main() {
    const graph = []
    let answer = "YES"

    let n, m
    data.forEach((e, i) => {
        if (i === 0) {
            ;[n, m] = e
            for (let i = 1; i <= n; i++) graph[i] = []
        } else {
            const [from, to] = e
            graph[from].push(to)
            graph[to].push(from)
        }
    })

    const visited = new Array(n + 1).fill(0)
    function dfs(start) {
        const q = []
        q.push(start)

        while (q.length) {
            const cur = q.shift()
            for (let i = 0; i < graph[cur].length; i++) {
                const next = graph[cur][i]

                if (!visited[next]) {
                    if (visited[cur] === 1) {
                        visited[next] = 2
                    } else {
                        visited[next] = 1
                    }
                    q.push(next)
                } else if (visited[cur] === visited[next]) return
            }
        }
    }

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            visited[i] = 1
            dfs(i)
        }
    }

    let flag = false
    loop1: for (let i = 1; i <= n; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            if (visited[i] === visited[graph[i][j]]) {
                console.log("NO")
                flag = true
                break loop1
            }
        }
    }

    if (!flag) console.log(answer)
}

rl.on("line", (line) => {
    if (!K) K = +line
    else {
        data.push(line.split(" ").map(Number))
        if (data.length === data[0][1] + 1) {
            main()
            data = []
        }
    }
})

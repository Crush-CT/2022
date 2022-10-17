const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0,
    N = 0,
    M = 0,
    V = 0,
    data = [],
    graph = [],
    d_visited = [],
    b_visited = [],
    d_graph = [],
    b_graph = []

function dfs(v) {
    d_visited[v] = true
    d_graph.push(v)

    for (let i = 1; i < graph.length; i++) {
        if (graph[v][i] === 1 && d_visited[i] === false) dfs(i)
    }
}

function bfs(v) {
    let q = []
    q.push(v)
    b_graph.push(v)

    while (q.length !== 0) {
        let deq = q.shift()
        b_visited[deq] = true
        for (let i = 1; i < graph.length; i++) {
            if (graph[deq][i] === 1 && b_visited[i] === false) {
                b_visited[i] = true
                q.push(i)
                b_graph.push(i)
            }
        }
    }

    return
}

function solve(data) {
    graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false))

    for (let i of data) {
        const [a, b] = i
        ;(graph[a][b] = 1), (graph[b][a] = 1)
    }

    d_visited = new Array(N + 1).fill(false)
    b_visited = new Array(N + 1).fill(false)

    dfs(V)
    bfs(V)

    console.log(d_graph.join(" "))
    console.log(b_graph.join(" "))
}

rl.on("line", (line) => {
    if (count === 0) [N, M, V] = line.split(" ").map(Number)
    else data.push(line.split(" ").map(Number))
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

class Queue {
    constructor() {
        this.storage = {}
        this.front = 0
        this.rear = -1
    }

    size() {
        if (this.front > this.rear) {
            return 0
        } else {
            return this.rear - this.front + 1
        }
    }

    push(value) {
        this.rear += 1
        this.storage[this.rear] = value
    }

    pop_left() {
        let value = this.storage[this.front]
        if (this.size()) {
            delete this.storage[this.front]
            this.front += 1
        }
        return value
    }
}

let N
const data = [],
    dx = [-2, -2, 0, 0, +2, +2],
    dy = [-1, +1, -2, +2, -1, +1]

function bfs() {
    const visited = Array.from(Array(N), () => Array(N).fill(false))
    let que = new Queue()
    que.push([data[0], data[1], 0])
    visited[data[1]][data[0]] = true
    while (que.size()) {
        let [x, y, cout] = que.pop_left()
        if (x === data[2] && y === data[3]) {
            return cout
        }
        for (let i = 0; i < 6; i++) {
            let nx = x + dx[i]
            let ny = y + dy[i]
            if (nx >= 0 && nx <= N - 1 && ny >= 0 && ny <= N - 1) {
                if (!visited[ny][nx]) {
                    visited[ny][nx] = true
                    que.push([nx, ny, cout + 1])
                }
            }
        }
    }
    return -1
}

function solve() {
    const res = bfs(0)
    console.log(res)
}

rl.on("line", (line) => {
    if (!N) N = +line
    else {
        line.split(" ").map((v) => data.push(+v))
    }
}).on("close", () => {
    solve()
    process.exit()
})

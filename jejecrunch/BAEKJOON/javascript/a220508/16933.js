const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

class Node {
    constructor(x, y, k, day, time) {
        this.x = x
        this.y = y
        this.k = k
        this.day = day
        this.time = time
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    push(x, y, k, day, time) {
        let node = new Node(x, y, k, day, time)
        if (this.size === 0) {
            this.head = node
        } else {
            this.tail.next = node
        }
        this.tail = node
        this.size++
    }
    shift() {
        let temp = this.head
        if (this.size === 0) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
        }
        this.size--
        return temp
    }
    length() {
        return this.size
    }
}

let N,
    M,
    K,
    ans = Infinity
const data = [],
    dx = [0, 0, 1, -1],
    dy = [1, -1, 0, 0]

function isValid(x, y) {
    return x >= 0 && y >= 0 && x < N && y < M
}

function BFS() {
    let queue = new Queue()
    queue.push(0, 0, 0, 0, 1)
    let visited = Array.from({ length: 2 }, () =>
        Array.from(Array(K + 1), () => Array.from(Array(N), (x) => Array(M).fill(false)))
    )
    visited[0][0][0][0] = true
    while (queue.length() !== 0) {
        let cur = queue.shift()
        let x = cur.x
        let y = cur.y
        let k = cur.k
        let day = cur.day
        let time = cur.time
        if (x === N - 1 && y === M - 1) {
            ans = Math.min(ans, time)
        }
        for (i = 0; i < 4; i++) {
            let x_n = x + dx[i]
            let y_n = y + dy[i]
            let time_n = time
            //낮에 벽 안뿌수고 이동
            if (day === 0) {
                if (
                    isValid(x_n, y_n) &&
                    visited[0][k][x_n][y_n] === false &&
                    data[x_n][y_n] !== 1
                ) {
                    visited[0][k][x_n][y_n] = true
                    queue.push(x_n, y_n, k, 1, time_n + 1)
                }
                //낮에 벽 뿌수기
                if (k + 1 <= K) {
                    if (
                        isValid(x_n, y_n) &&
                        visited[0][k + 1][x_n][y_n] === false &&
                        data[x_n][y_n] === 1
                    ) {
                        visited[0][k + 1][x_n][y_n] = true
                        queue.push(x_n, y_n, k + 1, 1, time_n + 1)
                    }
                }
            } else if (day === 1) {
                if (
                    isValid(x_n, y_n) &&
                    visited[1][k][x_n][y_n] === false &&
                    data[x_n][y_n] !== 1
                ) {
                    visited[1][k][x_n][y_n] = true
                    queue.push(x_n, y_n, k, 0, time_n + 1)
                }
                if (k + 1 <= K) {
                    if (
                        isValid(x_n, y_n) &&
                        visited[1][k][x_n][y_n] === false &&
                        data[x_n][y_n] === 1
                    ) {
                        visited[1][k][x][y] = true
                        queue.push(x, y, k, 0, time_n + 1)
                    }
                }
            }
        }
    }
}

function solve() {
    BFS()

    console.log(ans === Infinity ? -1 : ans)
}

rl.on("line", (line) => {
    if (!N && !M && !K) [N, M, K] = line.split(" ").map(Number)
    else data.push(line.split("").map(Number))
}).on("close", () => {
    solve()
    process.exit()
})

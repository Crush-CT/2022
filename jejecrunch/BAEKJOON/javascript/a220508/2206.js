const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

class Node {
    constructor(x, y, wall, time) {
        this.x = x
        this.y = y
        this.wall = wall
        this.time = time
        this.next = null
    }
}
class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    push(x, y, wall, time) {
        let node = new Node(x, y, wall, time)
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

let N, M, visited
const data = [],
    dx = [0, 0, 1, -1],
    dy = [1, -1, 0, 0]

function solve() {
    visited = new Array(N)
        .fill(0)
        .map(() => new Array(M).fill(0).map(() => new Array(2).fill(false)))

    let queue = new Queue()
    queue.push(0, 0, true, 1)
    let ans = -1
    while (queue.length()) {
        let cur = queue.shift()
        const [x, y, canBreak, time] = [cur.x, cur.y, cur.wall, cur.time]
        if (x === N - 1 && y === M - 1) {
            ans = time
            break
        }

        if (visited[x][y][canBreak]) continue
        visited[x][y][canBreak] = true

        for (let i = 0; i < 4; i++) {
            let [nx, ny, ntime, nextCanBreak] = [x + dx[i], y + dy[i], time + 1, canBreak]
            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue

            if (data[nx][ny]) {
                if (nextCanBreak) nextCanBreak = false
                else continue
            }
            queue.push(nx, ny, nextCanBreak, ntime)
        }
    }
    console.log(ans)
}

rl.on("line", (line) => {
    if (!N && !M) [N, M] = line.split(" ").map(Number)
    else data.push(line.split("").map(Number))
}).on("close", () => {
    solve()
    process.exit()
})

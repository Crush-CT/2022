const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

class Node {
    constructor(x, y, z, c) {
        this.x = x
        this.y = y
        this.z = z
        this.c = c
    }
}
class Queue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }

    length() {
        return this.size
    }

    push(x, y, z, c) {
        let node = new Node(x, y, z, c)
        if (this.size === 0) {
            this.front = node
        } else {
            this.rear.next = node
        }
        this.rear = node
        this.size++
    }

    pop_left() {
        let value = this.front
        if (this.size === 0) {
            this.front = null
            this.rear = null
        } else {
            this.front = this.front.next
        }
        this.size--
        return value
    }
}

let N, M, K, visited
const data = [],
    dx = [0, 0, -1, 1],
    dy = [-1, 1, 0, 0]

function BFS(map, visited) {
    let que = new Queue()
    que.push(0, 0, 0, 1) //x,y,벽 부신 개수, count
    while (que.length()) {
        let v = que.pop_left()
        if (v.x === M - 1 && v.y === N - 1) {
            return v.c
        }
        for (let i = 0; i < 4; i++) {
            let nx = v.x + dx[i]
            let ny = v.y + dy[i]
            if (nx >= 0 && nx <= M - 1 && ny >= 0 && ny <= N - 1) {
                if (map[ny][nx] === 0) {
                    if (visited[ny][nx] > v.z) {
                        visited[ny][nx] = v.z
                        que.push(nx, ny, v.z, v.c + 1)
                    }
                } else {
                    //벽을 만났을때
                    if (visited[ny][nx] > v.z + 1) {
                        visited[ny][nx] = v.z + 1
                        que.push(nx, ny, v.z + 1, v.c + 1)
                    }
                }
            }
        }
    }
    return -1
}

function solve() {
    visited = new Array(N).fill(0).map(() => new Array(M).fill(K + 1))

    let map = Array.from(Array(N), () => Array(M))

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            map[i][j] = data[i][j]
        }
    }

    console.log(BFS(map, visited))
}

rl.on("line", (line) => {
    if (!N && !M && !K) [N, M, K] = line.split(" ").map(Number)
    else data.push(line.split("").map(Number))
}).on("close", () => {
    solve()
    process.exit()
})

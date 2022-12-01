const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N,
    data = []

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

function solve(info) {
    let graph = Array.from(Array(N - 1), () => Array())
    let graph_list = Array.from(Array(N + 1), () => Array())
    let visited = new Array(N + 1).fill(false)
    for (let i = 0; i < info.length - 1; i++) {
        let input = info[i]
        for (let j = 0; j < input.length; j++) {
            graph[i][j] = input[j]
        }
    }

    for (let [a, b] of graph) {
        graph_list[a].push(b)
        graph_list[b].push(a)
    }
    let nCheck = info[info.length - 1]
    let output = 0
    let end = false
    let pi = 1 //값을 넣어야 할 인덱스 값.
    if (nCheck[0] === 1) {
        visited[1] = true
        DFS(1)
    }
    console.log(output)

    function DFS(n) {
        if (pi === N) {
            output = 1
            end = true
            return
        } else if (!end) {
            let nArr = []
            for (let i = 0; i < graph_list[n].length; i++) {
                if (!visited[graph_list[n][i]]) {
                    nArr[graph_list[n][i]] = true
                }
            }
            for (let i = 0; i < graph_list[n].length; i++) {
                if (nArr[nCheck[pi]] !== undefined) {
                    pi += 1
                    visited[nCheck[pi - 1]] = true
                    DFS(nCheck[pi - 1])
                } else {
                    let allVisited = true
                    for (let j = 0; j < graph_list[n].length; j++) {
                        if (!visited[graph_list[n][j]]) {
                            allVisited = false
                            break
                        }
                    }
                    if (!allVisited) {
                        output = 0
                        end = true
                        return
                    }
                }
            }
        }
    }
}

rl.on("line", (line) => {
    if (!N) N = +line
    else data.push(line.split(" ").map(Number))
}).on("close", () => {
    solve(data)
    process.exit()
})

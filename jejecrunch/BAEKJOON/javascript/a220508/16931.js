const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0,
    M = 0,
    res = 0,
    left = 0,
    front = 0,
    up = 0
const data = []

function solve() {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (j === 0) left += data[i][j]
            else {
                if (data[i][j - 1] < data[i][j]) left += data[i][j] - data[i][j - 1]
            }
        }
    }

    for (let j = 0; j < M; j++) {
        for (let i = 0; i < N; i++) {
            if (i === 0) front += data[i][j]
            else {
                if (data[i - 1][j] < data[i][j]) front += data[i][j] - data[i - 1][j]
            }
        }
    }
    res = 2 * (up + left + front)
}
rl.on("line", (line) => {
    if (!N && !M) [N, M] = line.split(" ").map(Number)
    else {
        up = N * M
        data.push(line.split(" ").map(Number))
    }
}).on("close", () => {
    solve()

    console.log(res)
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(arr) {
    for (let i = 1; i < N; i++) {
        arr[i][0] += Math.min(arr[i - 1][1], arr[i - 1][2])
        arr[i][1] += Math.min(arr[i - 1][0], arr[i - 1][2])
        arr[i][2] += Math.min(arr[i - 1][0], arr[i - 1][1])
    }
    console.log(Math.min(...arr[N - 1]))
}

let count = 0,
    N = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else data.push(line.split(" ").map(Number))
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})

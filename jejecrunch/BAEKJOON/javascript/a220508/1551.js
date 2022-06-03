const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve() {
    for (let i = 0; i < K; i++) {
        for (let j = 0; j < N - 1; j++) {
            data[j] = data[j + 1] - data[j]
        }
        N--
    }
    console.log(data.splice(0, N).join(","))
}

let count = 0,
    N = 0,
    K = 0,
    data = []
rl.on("line", (line) => {
    if (count == 0) {
        ;[N, K] = line.split(" ").map(Number)
    } else {
        data = line.split(",")
        rl.close()
    }
    count++
}).on("close", () => {
    solve()
    process.exit()
})

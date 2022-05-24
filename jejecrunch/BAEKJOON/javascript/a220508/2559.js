const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let sum = 0,
        idx = 0,
        max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < N; i++) {
        sum += data[i]
        idx++
        if (idx == K) {
            max = Math.max(max, sum)
            sum -= data[i - K + 1]
            idx--
        }
    }
    console.log(max)
}

let count = 0,
    [N, K] = [0, 0]

rl.on("line", (line) => {
    if (count == 0) [N, K] = line.split(" ").map(Number)
    else {
        solve(line.split(" ").map(Number))
        rl.close()
    }
    count++
}).on("close", () => {
    process.exit()
})

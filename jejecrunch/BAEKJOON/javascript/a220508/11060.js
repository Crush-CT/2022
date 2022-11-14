const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const d = new Array(N).fill(-1)

    d[0] = 0

    for (let i = 1; i < N; i++) {
        for (let j = 0; j < i; j++) {
            if (d[j] !== -1 && i - j <= input[j]) {
                if (d[i] === -1 || d[i] > d[j] + 1) {
                    d[i] = d[j] + 1
                }
            }
        }
    }

    console.log(d[N - 1])
}

let N, data

rl.on("line", (line) => {
    if (!N) N = +line
    else data = line.split(" ").map(Number)
}).on("close", () => {
    solve(data)
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    if (N > 1) {
        let res = data[0]
        for (let i = 1; i < N; i++) {
            res = res.map((x, idx) => {
                if (x != data[i][idx]) return "?"
                return x
            })
        }
        console.log(res.join(""))
    } else if (N == 1) console.log(data[0].join(""))
}

let count = 0,
    N = 0,
    data = []

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else data.push(line.split(""))
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})

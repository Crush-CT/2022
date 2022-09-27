const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0
let N = 0,
    data

function solve() {
    const copy = [...data].sort((a, b) => b - a)
    if (data.every((v, i) => v === copy[i])) console.log("-1")
    else {
        let i = N - 2
        while (data[i] > data[i + 1]) i--
        let j = N - 1
        while (data[i] > data[j]) j--
        ;[data[i], data[j]] = [data[j], data[i]]
        console.log([...data.slice(0, i + 1), ...data.slice(i + 1).sort((a, b) => a - b)].join(" "))
    }
}

rl.on("line", (line) => {
    if (count == 0) {
        N = +line
    } else if (count == N + 1) rl.close()
    else data = line.split(" ").map(Number)

    count++
}).on("close", () => {
    solve()
    process.exit()
})

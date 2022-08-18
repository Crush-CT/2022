const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(c) {
    c = c.sort((a, b) => b - a).map(Number)
    let q = 0,
        res = 0,
        k = K

    for (let v of c) {
        q = Math.floor(k / v)
        if (q === 0) continue
        res += q
        k %= v
        if (k === 0) break
    }

    console.log(res)
}

let count = 0,
    N = 0,
    K = 0,
    coins = []

rl.on("line", (line) => {
    if (count == 0) {
        ;[N, K] = line.split(" ").map(Number)
    } else coins.push(line)
    count++
}).on("close", () => {
    solve(coins)
    process.exit()
})

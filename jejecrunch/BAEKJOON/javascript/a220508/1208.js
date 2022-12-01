const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0,
    S = 0,
    memo = new Map()
;(ans = 0), (data = [])

function solve(b) {
    for (let bit = 1; bit < 1 << data.length; bit++) {
        const sum = data
            .filter((_, index) => bit & (1 << index))
            .reduce((r, v) => {
                return r + v
            }, 0)
        if (sum == S) ans++
        memo.set(sum, (memo.get(sum) ?? 0) + 1)
    }

    for (let bit = 1; bit < 1 << b.length; bit++) {
        const sum = b
            .filter((_, index) => bit & (1 << index))
            .reduce((r, v) => {
                return r + v
            }, 0)
        if (sum == S) ans++
        ans += memo.get(S - sum) ?? 0
    }

    console.log(ans)
}

rl.on("line", (line) => {
    if (!N && !S) {
        ;[N, S] = line.split(" ").map(Number)
    } else {
        data = line.split(" ").map(Number)
    }
}).on("close", () => {
    const B = data.splice(Math.floor(N / 2))
    solve(B)
    process.exit()
})

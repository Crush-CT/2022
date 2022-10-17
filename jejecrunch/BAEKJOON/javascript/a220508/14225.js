const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N,
    S,
    count = 0
const pick = [],
    sumArr = new Array(2000001).fill(0)

function dfs(L) {
    if (L === N) {
        const sum = pick.reduce((a, c) => a + c, 0)
        sumArr[sum] = 1
        return
    }

    pick.push(S[L])
    dfs(L + 1)
    pick.pop()
    dfs(L + 1)
}

function solve() {
    dfs(0)

    for (let i = 1; i < 2000001; i++) if (!sumArr[i]) return i
}

rl.on("line", (line) => {
    if (!N) N = +line
    else {
        S = line.split(" ").map(Number)
    }
}).on("close", () => {
    const res = solve()
    console.log(res)
    process.exit()
})

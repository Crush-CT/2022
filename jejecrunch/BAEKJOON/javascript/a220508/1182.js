const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N,
    S,
    count = 0,
    data = []
const pick = []

function dfs(L) {
    if (L === N) {
        const sum = pick.reduce((a, c) => a + c, 0)
        if (sum === S) count++
        return
    }

    pick.push(data[L])
    dfs(L + 1)
    pick.pop()
    dfs(L + 1)
}

function solve() {
    dfs(0)

    if (S === 0) count--
    console.log(count)
}

rl.on("line", (line) => {
    if (!N && !S) [N, S] = line.split(" ").map(Number)
    else {
        data = line.split(" ").map(Number)
    }
}).on("close", () => {
    solve()
    process.exit()
})

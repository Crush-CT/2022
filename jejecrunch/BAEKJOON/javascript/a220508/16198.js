const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N,
    W = []

function solve() {
    let max = Number.MIN_SAFE_INTEGER

    function dfs(arr, sum) {
        if (arr.length === 2) {
            max = Math.max(max, sum)
            return
        }

        for (let i = 1; i < arr.length - 1; i++) {
            const restArr = [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)]
            dfs(restArr, sum + arr[i - 1] * arr[i + 1])
        }
    }

    dfs(W, 0)
    console.log(max)
}

rl.on("line", (line) => {
    if (!N) N = +line
    else {
        W = line.split(" ").map(Number)
    }
}).on("close", () => {
    solve()

    process.exit()
})

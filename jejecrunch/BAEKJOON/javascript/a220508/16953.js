const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let mini = 10000

function dfs(cur, max, value) {
    if (cur === max) {
        console.log(value)
        process.exit()
    }

    if (cur * 2 <= max) {
        dfs(cur * 2, max, value + 1)
    }
    if (cur + "1" <= max) {
        dfs(Number(cur + "1"), max, value + 1)
    }
}

function solve([A, B]) {
    dfs(A, B, 1)
    console.log(-1)
}

rl.on("line", (line) => {
    solve(line.split(" ").map(Number))
})

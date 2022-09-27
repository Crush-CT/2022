const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0

function solve(S) {
    let answer = ""
    function dfs(V, pick) {
        if (pick.length === 6) {
            answer += `${pick.join(" ")}\n`
            return
        }
        for (let i = V; i < N; i++) {
            dfs(i + 1, [...pick, S[i]])
        }
    }

    dfs(0, [])

    console.log(answer)
}

rl.on("line", (line) => {
    if (line === "0") process.exit()
    N = +line.split(" ")[0]
    solve(line.split(" ").slice(1))
})

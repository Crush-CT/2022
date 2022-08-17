const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve([N, L]) {
    let count = 0
    while (N > 0) {
        count++
        if (!(count + "").includes(L + "")) N--
    }
    console.log(count)
}

rl.on("line", (line) => {
    solve(line.split(" ").map(Number))
})

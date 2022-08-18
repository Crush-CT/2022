const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const a = new Array(101).fill(0)
    let cnt = 0
    for (let i = 0; i < N; i++) {
        if (a[data[i]] === 1) cnt++
        a[data[i]] = 1
    }

    console.log(cnt)
}

let count = 0,
    N = 0
rl.on("line", (line) => {
    if (count == 0) N = +line
    else solve(line.split(" ").map(Number))
    count++
}).on("close", () => {
    process.exit()
})

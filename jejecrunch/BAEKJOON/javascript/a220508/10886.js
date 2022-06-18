const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let count = 0,
    N = 0,
    data = []

function solve() {
    const cute_count = data.filter((v) => v).length
    const no_cute_count = data.filter((v) => !v).length

    if (cute_count < no_cute_count) console.log("Junhee is not cute!")
    else console.log("Junhee is cute!")
}

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == N + 1) rl.close()
    else data.push(+line)
    count++
}).on("close", () => {
    solve()
    process.exit()
})

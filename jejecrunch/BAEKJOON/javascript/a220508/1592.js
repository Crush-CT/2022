const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve([N, M, L]) {
    const friend = new Array(N + 1).fill(0)
    let count = 0
    friend[1] = 1
    let index = 1
    while (true) {
        if (friend[index] === M) break

        if (friend[index] % 2 === 1) index += L
        else index -= L

        if (index > N) index %= N
        else if (index < 1) index += N

        friend[index]++
        count++
    }

    console.log(count)
}

rl.on("line", (line) => {
    solve(line.split(" ").map(Number))
    process.exit()
})

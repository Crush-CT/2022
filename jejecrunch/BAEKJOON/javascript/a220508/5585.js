const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let count = 0,
        i = 0
    const cur = [500, 100, 50, 10, 5, 1]

    while (data != 0) {
        count += Math.floor(data / cur[i])
        data %= cur[i]
        i += 1
    }

    console.log(count)
}

rl.on("line", (line) => {
    solve(1000 - +line)
    rl.close()
}).on("close", () => {
    process.exit()
})

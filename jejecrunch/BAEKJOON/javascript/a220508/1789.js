const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let total = 1
    let res = 0,
        sum = 0

    while (true) {
        sum += total
        res++
        if (sum > data) {
            res--
            break
        }

        total++
    }

    console.log(res)
}

rl.on("line", (line) => {
    solve(line)
}).on("close", () => {
    process.exit()
})

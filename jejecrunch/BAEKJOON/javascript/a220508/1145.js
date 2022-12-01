const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let count = 1,
        ret = 1

    while (true) {
        count = 0

        input.forEach((v) => {
            if (ret % v === 0) count++
        })

        if (count >= 3) break

        ret++
    }

    console.log(ret)
}

let data = []

rl.on("line", (line) => {
    data = line.split(" ").map(Number)
}).on("close", () => {
    solve(data)
    process.exit()
})

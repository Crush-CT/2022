const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let N = 0

rl.on("line", (line) => {
    if (!N) N = +line
    else {
        const res = line.slice(N - 5, N)
        console.log(res)
    }
}).on("close", () => {
    process.exit()
})

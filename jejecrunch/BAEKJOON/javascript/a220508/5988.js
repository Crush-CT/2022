const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(num) {
    if (num % 2 == 0) console.log("even")
    else console.log("odd")
}

let count = 0,
    N = 0
rl.on("line", (line) => {
    if (count == 0) {
        N = +line
    } else if (count == N + 1) {
        rl.close()
    } else {
        solve(BigInt(line))
    }
    count++
}).on("close", () => {
    process.exit()
})

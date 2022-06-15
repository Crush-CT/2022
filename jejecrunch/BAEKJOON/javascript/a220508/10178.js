const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    console.log(
        "You get %d piece(s) and your dad gets %d piece(s).",
        Math.floor(input[0] / input[1]),
        input[0] % input[1]
    )
}

let count = 0,
    N = 0

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == N + 1) rl.close()
    else solve(line.split(" "))
    count++
}).on("close", () => {
    process.exit()
})

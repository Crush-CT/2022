const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const even_t = data.reduce((a, c) => {
        if (c % 2 == 0) a += c
        return a
    }, 0)
    const odd_t = data.reduce((a, c) => {
        if (c % 2 == 1) a += c
        return a
    }, 0)

    if (even_t < odd_t) console.log("ODD")
    else if (even_t > odd_t) console.log("EVEN")
    else console.log("TIE")
}

let count = 0,
    N = 0

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else solve(line.split(" ").map(Number).splice(1))
    count++
}).on("close", () => {
    process.exit()
})

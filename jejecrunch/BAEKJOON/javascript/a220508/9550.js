const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let ans = 0
    for (let i = 0; i < input.length; i++) {
        ans += Math.floor(input[i] / K)
    }
    console.log(ans)
}

let count = 0,
    T = 0,
    N = 0,
    K = 0

rl.on("line", (line) => {
    if (count == 0) T = +line
    else if (count % 2 == 1) {
        ;[N, K] = line.split(" ")
    } else solve(line.split(" "))
    count++
}).on("close", () => {
    process.exit()
})

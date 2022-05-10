const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let [M, P, L, E, R, S, N] = input
    for (let i = 0; i < N; i++) {
        let larva = M * E
        let adult = Math.floor(P / S)
        let pupa = Math.floor(L / R)

        M = adult
        P = pupa
        L = larva
    }

    console.log(M)
}

rl.on("line", (line) => {
    solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})

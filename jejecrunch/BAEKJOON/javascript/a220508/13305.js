const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(K, L) {
    let cost = L[0]
    let total = cost * K[1]
    for (let i = 1; i < L.length - 1; i++) {
        if (cost < L[i]) total += cost * K[i + 1]
        else {
            cost = L[i]
            total += cost * K[i + 1]
        }
    }
    console.log(total + "")
}

let count = 0,
    kms = [],
    lts = []

rl.on("line", (line) => {
    if (count === 0) N = +line
    else if (count === 1) {
        const arr = line.split(" ").map(BigInt)
        kms = [0, ...arr]
    } else if (count === 2) lts = line.split(" ").map(BigInt)
    count++
}).on("close", () => {
    solve(kms, lts)
    process.exit()
})

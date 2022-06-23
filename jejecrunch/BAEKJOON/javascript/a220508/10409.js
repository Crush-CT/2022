const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let sum = 0n,
        result = 0

    for (let i = 0; i < data.length; i++) {
        if (sum + BigInt(data[i]) <= BigInt(T)) {
            sum += BigInt(data[i])
            result += 1
        } else break
    }

    console.log(result)
}

let n = 0,
    T = 0,
    input = [],
    count = 0

rl.on("line", (line) => {
    if (count == 0) {
        ;[n, T] = line.split(" ")
    } else input = line.split(" ")
    count++
}).on("close", () => {
    solve(input)
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const factor = new Array(10000001).fill(1, 0, 4)

for (let i = 4; i < 10000001; i++) {
    factor[i] = factor[i - 3] + factor[i - 2]
}

let count = 0,
    N = 0

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == N + 1) rl.close()
    else console.log(factor[Number(line)])
    count++
}).on("close", () => {
    process.exit()
})

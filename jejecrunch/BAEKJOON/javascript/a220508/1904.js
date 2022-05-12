const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const factor = new Array(10000001).fill(1, 0, 1).fill(2, 1, 2)

for (let i = 2; i < 10000001; i++) {
    factor[i] = (factor[i - 2] + factor[i - 1]) % 15746
}

rl.on("line", (line) => {
    console.log(factor[Number(line) - 1])
    rl.close()
}).on("close", () => {
    process.exit()
})

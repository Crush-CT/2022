const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(n) {
    const count = new Array(n + 1).fill(0n)

    for (let i = 1; i <= n; i++) {
        count[i] = count[i - 1] + 1n

        for (let j = 1; j <= i - 3; j++) {
            const tmp = count[i - (j + 2)] * BigInt(j + 1)
            if (count[i] > tmp) count[i] = count[i]
            else count[i] = tmp
        }
    }

    console.log(count[n] + "")
}
rl.on("line", (line) => {
    solve(+line)

    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const mod = BigInt(1000000000)
function solve(data) {
    const DP = new Array(data + 1)
    for (let i = 0; i <= data + 1; i++) {
        DP[i] = []
    }
    DP[1][0] = BigInt(0)
    for (let i = 1; i < 10; i++) {
        DP[1][i] = BigInt(1)
    }

    for (let i = 2; i <= data; i++) {
        for (let j = 0; j < 10; j++) {
            DP[i][j] = BigInt(0)
            if (j - 1 >= 0) DP[i][j] += DP[i - 1][j - 1]
            if (j + 1 <= 9) DP[i][j] += DP[i - 1][j + 1]
            DP[i][j] = BigInt(DP[i][j]) % mod
        }
    }

    const sum = DP[data].reduce((acc, cur) => acc + cur)
    console.log(String(sum % mod))
}
rl.on("line", (line) => {
    solve(+line)
    rl.close()
}).on("close", () => {
    process.exit()
})

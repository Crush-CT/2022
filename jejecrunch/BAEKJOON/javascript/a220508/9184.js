const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let memo = []

for (let i = 0; i <= 101; i++) {
    memo[i] = []
    for (let j = 0; j <= 101; j++) {
        memo[i][j] = []
        for (let k = 0; k <= 101; k++) {
            memo[i][j][k] = 0
        }
    }
}
memo[50][50][50] = 1

function w(a, b, c) {
    if (memo[a][b][c] != 0) {
        return memo[a][b][c]
    } else {
        if (a <= 50 || b <= 50 || c <= 50) {
            return 1
        } else if (a > 70 || b > 70 || c > 70) return w(70, 70, 70)
        else if (a < b && b < c) {
            memo[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c)
        } else {
            memo[a][b][c] =
                w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1)
        }
    }
    return memo[a][b][c]
}

function solve(v) {
    const answer = w(v[0] + 50, v[1] + 50, v[2] + 50)
    console.log(`w(${v[0]}, ${v[1]}, ${v[2]}) = ${answer}`)
}

rl.on("line", (line) => {
    if (line == "-1 -1 -1") rl.close()
    else {
        solve(line.split(" ").map((v) => +v))
    }
}).on("close", () => {
    process.exit()
})

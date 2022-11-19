const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const n = input[0].length
    const m = input[1].length

    let stack = []

    const lcsArray = Array.from(Array(n + 1), () => new Array(m + 1).fill(0))
    for (let i = 0; i < n; i++) {
        const char = input[0][i]
        for (let j = 0; j < m; j++) {
            if (char === input[1][j]) {
                lcsArray[i + 1][j + 1] = lcsArray[i][j] + 1
            } else {
                lcsArray[i + 1][j + 1] = Math.max(lcsArray[i][j + 1], lcsArray[i + 1][j])
            }
        }
    }

    let row = lcsArray[0].length - 1
    let col = lcsArray.length - 1
    while (row > 0 && col > 0) {
        if (lcsArray[col][row] === lcsArray[col - 1][row]) col--
        else if (lcsArray[col][row] === lcsArray[col][row - 1]) row--
        else {
            stack.unshift(input[0].split("")[col - 1])
            row--
            col--
        }
    }
    console.log(lcsArray[n][m])
    console.log(stack.join(""))
}
const data = []
rl.on("line", (line) => {
    data.push(line)
}).on("close", () => {
    solve(data)
    process.exit()
})

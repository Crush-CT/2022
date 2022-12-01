const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const s = input.shift().trim()
    const t = input.shift().trim()
    let answer = 0

    let LCS = new Array(s.length + 1)
    for (let i = 0; i < LCS.length; i++) {
        LCS[i] = new Array(t.length + 1).fill(0)
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) LCS[i][j] = LCS[i - 1][j - 1] + 1
            else LCS[i][j] = 0

            if (LCS[i][j] > answer) answer = LCS[i][j]
        }
    }

    console.log(answer)
}
const data = []
rl.on("line", (line) => {
    data.push(line)
}).on("close", () => {
    solve(data)
    process.exit()
})

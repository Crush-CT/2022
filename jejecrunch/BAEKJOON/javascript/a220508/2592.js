const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve() {
    const total = data.reduce((a, c) => a + c, 0)
    const counts = data.reduce((a, c) => {
        a[c] = (a[c] || 0) + 1
        return a
    }, {})

    const keys = Object.keys(counts)
    let mode = keys[0]
    keys.forEach((val) => {
        if (counts[val] > counts[mode]) {
            mode = val
        }
    })

    console.log(Math.floor(total / data.length))
    console.log(mode)
}

const data = []
rl.on("line", (line) => {
    data.push(+line)
}).on("close", () => {
    solve()
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve([m, n]) {
    const arr = []
    let count = 0,
        small = 10001
    for (let i = 1; i <= 100; i++) {
        const ipt = i ** 2
        if (ipt >= m && ipt <= n) {
            arr.push(ipt)
            count++
        }
        if (ipt >= m && ipt <= n && small > ipt) small = ipt
    }

    if (count == 0) console.log(-1)
    else console.log(arr.reduce((a, c) => a + c, 0) + "\n" + small)
}

const data = []

rl.on("line", (line) => {
    data.push(+line)
}).on("close", () => {
    solve(data)
    process.exit()
})

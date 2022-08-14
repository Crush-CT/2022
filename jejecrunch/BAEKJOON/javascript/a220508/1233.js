const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve([a, b, c]) {
    const li = new Array(81).fill(0)

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {
            for (let k = 1; k <= c; k++) {
                li[i + j + k] += 1
            }
        }
    }

    console.log(li.indexOf(Math.max(...li)))
}

rl.on("line", (line) => {
    solve(line.split(" ").map(Number))
    process.exit()
})

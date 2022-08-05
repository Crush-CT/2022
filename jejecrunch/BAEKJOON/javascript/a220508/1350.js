const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve() {
    let sum = 0
    for (let i of file) {
        if (i % cluster === 0) sum += Math.floor(i / cluster)
        else sum += Math.floor(i / cluster) + 1
    }
    console.log(sum * cluster)
}

let count = 0,
    file = [],
    cluster = 0
rl.on("line", (line) => {
    if (count == 1) {
        file = line.split(" ")
    } else if (count == 2) cluster = line
    count++
}).on("close", () => {
    solve()
    process.exit()
})

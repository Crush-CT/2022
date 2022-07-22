const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(d) {
    const result = []
    for (let i = 0; i < d.length; i++) {
        result.push(d[i][0] + d[i][1])
    }
    console.log(result.join("\n"))
}

let count = 0,
    N = 0,
    data = []
rl.on("line", (line) => {
    if (count == 0) N = +line
    else data.push(line.split(",").map(Number))
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let c = 100,
        s = 100
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] < data[i][1]) c -= data[i][1]
        else if (data[i][0] > data[i][1]) s -= data[i][0]
    }
    console.log(c + "\n" + s)
}

let count = 0,
    N = 0
const data = []

rl.on("line", (line) => {
    if (count == 0) N = +line
    else data.push(line.split(" ").map(Number))
    count++
}).on("close", () => {
    solve(data)
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    data = data.split("-")
    let total = 0
    for (let i = 0; i < data[0].length; i++) {
        total +=
            (data[0][i].charCodeAt(0) - "A".charCodeAt(0)) * Math.pow(26, data[0].length - i - 1)
    }
    total -= +data[1]

    if (Math.abs(total) <= 100) console.log("nice")
    else console.log("not nice")
}

let count = 0,
    N = 0

rl.on("line", (line) => {
    if (count == 0) N = Number(line)
    else if (count == N + 1) rl.close()
    else solve(line)
    count++
}).on("close", () => {
    process.exit()
})

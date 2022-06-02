const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let sum = 0,
        count = 1

    for (let i = 0; i < data; i++, count += 2) sum += count
    console.log(data + " => " + (sum - data + 1))
}

rl.on("line", (line) => {
    if (line == "0") rl.close()
    else solve(Number(line))
}).on("close", () => {
    process.exit()
})

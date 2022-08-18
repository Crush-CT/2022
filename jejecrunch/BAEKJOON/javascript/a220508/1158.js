const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    let arr = [],
        answer = []
    for (let i = 0; i < data[0]; i++) arr.push(i + 1)

    let count = 1
    while (arr.length) {
        const shiftItem = arr.shift()

        if (count % data[1] === 0) answer.push(shiftItem)
        else arr.push(shiftItem)

        count += 1
    }
    console.log(`<${answer.join(", ")}>`)
}

rl.on("line", (line) => {
    solve(line.split(" ").map(Number))
}).on("close", () => {
    process.exit()
})

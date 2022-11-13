const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    if (input[2] - input[1] == input[1] - input[0])
        console.log(input[input.length - 1] + (input[1] - input[0]))
    else console.log(input[input.length - 1] * (input[1] / input[0]))
}

let N
const data = []

rl.on("line", (line) => {
    if (!N) N = +line
    else data.push(+line)
}).on("close", () => {
    solve(data)
    process.exit()
})

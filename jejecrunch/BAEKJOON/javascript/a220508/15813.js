const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let result = 0
    for (let i = 0; i < input.length; i++) {
        result += input[i].charCodeAt(0) - "A".charCodeAt(0) + 1
    }
    console.log(result)
}

let count = 0,
    N = 0

rl.on("line", (line) => {
    if (count == 0) N = +line
    else solve(line.split(""))
    count++
}).on("close", () => {
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const [A, B, C] = input.sort((a, b) => a - b)

    let result = ""

    if (A ** 2 + B ** 2 == C ** 2) result = "yes"
    else result = "no"

    console.log("Scenario #" + i++ + ":\n" + result + "\n")
}

let count = 0
let N = 0
let i = 1

rl.on("line", (line) => {
    if (count == 0) N = +line
    else if (count == N + 1) rl.close()
    else {
        solve(line.split(" ").map(Number))
    }
    count++
}).on("close", () => {
    process.exit()
})

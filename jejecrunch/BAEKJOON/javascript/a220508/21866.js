const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let res = "none",
        isHacker = false

    const stand = [100, 100, 200, 200, 300, 300, 400, 400, 500]
    for (let i in input) {
        if (input[i] > stand[i]) isHacker = true
    }

    const sum = input.reduce((a, c) => a + c)
    if (isHacker) res = "hacker"
    else if (sum >= 100) res = "draw"

    console.log(res)
}

let data = []

rl.on("line", (line) => {
    data = line.split(" ").map(Number)
}).on("close", () => {
    solve(data)
    process.exit()
})

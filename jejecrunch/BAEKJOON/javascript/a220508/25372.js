const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const N = input.shift()

    input.forEach((v) => {
        if (v.length >= 6 && v.length <= 9) console.log("yes")
        else console.log("no")
    })
}

const data = []

rl.on("line", (line) => {
    data.push(line)
}).on("close", () => {
    solve(data)
    process.exit()
})

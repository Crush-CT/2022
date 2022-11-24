const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const T = input.shift()

    input = input.map((v) => (v + "").split(""))

    input.forEach((v) => {
        const unique = v.filter((e, i) => v.indexOf(e) === i)
        console.log(unique.length)
    })
}

const data = []

rl.on("line", (line) => {
    data.push(line)
}).on("close", () => {
    solve(data)
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const req = input[0].split("").filter((v) => v == "a").length
    const res = input[1].split("").filter((v) => v == "a").length

    if (req >= res) console.log("go")
    else console.log("no")
}

const data = []

rl.on("line", (line) => {
    data.push(line)
}).on("close", () => {
    solve(data)
    process.exit()
})

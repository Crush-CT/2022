const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(data) {
    const stand = []
    for (let i = 1; i <= 30; i++) {
        stand.push(i)
    }
    console.log(stand.filter((x) => !data.includes(x)).join("\n"))
}

let data = []

rl.on("line", (line) => {
    data.push(+line)
}).on("close", () => {
    solve(data)
    process.exit()
})

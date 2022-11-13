const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let s = ""

for (let i = 1; i < 100001; i++) s += i

function solve(num) {
    console.log(s.indexOf(num) + 1)
}

rl.on("line", (line) => {
    solve(+line)
    process.exit()
})

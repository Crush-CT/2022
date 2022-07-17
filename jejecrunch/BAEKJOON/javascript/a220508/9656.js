const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(a) {
    if(a%2==1) console.log("CY")
    else console.log("SK")
}

rl.on("line", (line) => {
    solve(line)
    process.exit()
})

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    const count = Math.floor(input / 4)
    let res = ""

    for (let i = 0; i < count; i++) {
        res += "long "
    }

    res += "int"

    console.log(res)
}

rl.on("line", (line) => {
    solve(+line)
    process.exit()
})

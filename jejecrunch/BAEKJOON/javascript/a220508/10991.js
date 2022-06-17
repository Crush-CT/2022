const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let result = ""
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < input - 1 - i; j++) result += " "
        for (let j = 0; j < i + 1; j++) result += "* "

        result += "\n"
    }
    console.log(result)
}

rl.on("line", (line) => {
    solve(+line)
}).on("close", () => {
    process.exit()
})

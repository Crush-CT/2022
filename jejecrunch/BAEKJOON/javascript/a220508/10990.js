const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let result = ""

    for (let i = 0; i < input - 1; i++) {
        result += " "
    }
    result += "*\n"
    for (let i = 0; i < input - 1; i++) {
        for (let j = 0; j < input - 2 - i; j++) result += " "
        result += "*"
        for (let j = 0; j < 2 * i + 1; j++) result += " "
        result += "*\n"
    }
    console.log(result)
}

rl.on("line", (line) => {
    solve(+line)
}).on("close", () => {
    process.exit()
})

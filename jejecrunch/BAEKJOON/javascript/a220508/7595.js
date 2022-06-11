const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let result = ""
    for (let i = 1; i <= input; i++) {
        for (let j = 0; j < i; j++) {
            result += "*"
        }
        result += "\n"
    }
    console.log(result.trim())
}

rl.on("line", (line) => {
    if (line == "0") rl.close()
    else solve(+line)
}).on("close", () => {
    process.exit()
})

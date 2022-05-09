const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let result = 0
    for (let i = 0; i < input[0].length; i++) {
        for (let j = 0; j < input[1].length; j++) {
            result += input[0][i] * input[1][j]
        }
    }
    console.log(result)
}

let input = []

rl.on("line", (line) => {
    input.push(line.split(" ")[0].split(""), line.split(" ")[1].split(""))
    rl.close()
}).on("close", () => {
    solve(input)
    process.exit()
})

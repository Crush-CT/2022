const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let result = 0
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < input[i].length; j++) {
                if (j % 2 == 0) if (input[i][j] == "F") result++
            }
        } else {
            for (let j = 0; j < input[i].length; j++) {
                if (j % 2 == 1) if (input[i][j] == "F") result++
            }
        }
    }
    console.log(result)
}

let input = []
let count = 0

rl.on("line", (line) => {
    if (count < 9) input.push(line.split(""))
    else rl.close()
    count++
}).on("close", () => {
    solve(input)
    process.exit()
})

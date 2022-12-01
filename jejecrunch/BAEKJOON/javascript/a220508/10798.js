const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let res = "",
        max = Number.MIN_SAFE_INTEGER

    for (let i = 0; i < input.length; i++) {
        max = Math.max(max, input[i].length)
    }
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < max; j++) {
            if (!input[i][j]) input[i][j] = ""
        }
    }
    for (let i = 0; i < max; i++) {
        for (let j = 0; j < input.length; j++) {
            res += input[j][i]
        }
    }

    console.log(res)
}

const data = []

rl.on("line", (line) => {
    data.push(line.split(""))
}).on("close", () => {
    solve(data)
    process.exit()
})

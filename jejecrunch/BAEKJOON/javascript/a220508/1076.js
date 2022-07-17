const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const palette = {
    black: 0,
    brown: 1,
    red: 2, 
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
}

let input = []

function solve(data) {
    const result = (palette[data[0]]*10+palette[data[1]])*Math.pow(10, palette[data[2]])
    console.log(result)
}

rl.on("line", (line) => {
    input.push(line)
}).on("close", () => {
    solve(input)
    process.exit()
})

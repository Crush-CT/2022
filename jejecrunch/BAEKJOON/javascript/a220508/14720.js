const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let res = 0

    for (let i = 0; i < input.length; i++) {
        if (input[i] === res % 3) res++
    }

    console.log(res)
}

let count = 0

rl.on("line", (line) => {
    if (count > 0) solve(line.split(" ").map(Number))
    count++
}).on("close", () => {
    process.exit()
})

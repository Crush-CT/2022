const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function solve(input) {
    let num = 1,
        time = 0

    while (input !== 0) {
        if (num > input) num = 1

        input -= num
        time += 1
        num += 1
    }

    console.log(time)
}

rl.on("line", (line) => {
    solve(+line)
})
